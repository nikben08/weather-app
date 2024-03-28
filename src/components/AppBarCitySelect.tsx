import { getCitiesReq } from "../api/getCitiesReq";
import { useQuery } from "react-query";
import { ApiResponse, IGetCitiesResponse, ICityData } from "../app/types";
import parseResponse from "../functions/parseResponse";
import Select from 'react-select';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from "react";

interface Option {
    value: string;
    label: string;
}

function AppBarCitySelect() {
    const theme = useTheme();
    const limit = 20; // Specify the limit of options to display

    const [searchValue, setSearchValue] = useState(''); // State to track input value
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(); // State to store filtered options
    
    const {
        data: cities,
        isLoading: isGetCitiesLoading,
    } = useQuery("get/Cities", () => getCitiesReq(), {
        cacheTime: 0,
        retry: 1,
        select: parseResponse as (
            response: ApiResponse<IGetCitiesResponse>
        ) => IGetCitiesResponse,
    });


    const filterOptions = (searchValue: string) => {
        if (cities) {
            const filtered = formatSelectOptions(cities)
                .filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()))
                .slice(0, limit); 
            setFilteredOptions(filtered);
        }
    };
    

    const handleInputChange = (searchValue: string) => {
        setSearchValue(searchValue);
        filterOptions(searchValue);
    };

    const formatSelectOptions = (getCitiesResponse: IGetCitiesResponse) => {
        const options: Option[] = [];
        getCitiesResponse.data.forEach((country: ICityData) => {
            country.cities.forEach((city: string) => {
                options.push({ value: city, label: country.country + '/' + city });
            });
        });
        return options;
    }
    

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: 300, // Adjust the width as needed
        backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black', // Background color based on theme mode
        textAlign: 'left', // Align text to the left
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? (theme.palette.mode === 'light' ? 'lightgray' : 'darkgray') : null, // Background color for selected option
        color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color based on theme mode
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color based on theme mode
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black', // Background color of the dropdown menu
        color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color of the dropdown menu
        textAlign: 'left', // Align text to the left
        height: '80vh', // Set maximum height to 100vh (100% of viewport height)
        overflowY: 'auto', // Add scrollbar if the content exceeds the height
    }),
    dropdownIndicator: (provided, state) => ({ // Remove dropdown indicator
        ...provided,
        display: 'none',
    }),
    indicatorSeparator: () => ({}) // Remove indicator separator
};



    return (
        <ThemeProvider theme={theme}>
            {!isGetCitiesLoading && (
                <Select
                    placeholder='Arama'
                    options={filteredOptions}
                    isSearchable={true}
                    isMulti={false}
                    noOptionsMessage={() => 'Aranan seçenek bulunamadı!'}
                    styles={customStyles} 
                    onInputChange={handleInputChange}
                />
            )}
        </ThemeProvider>
    );
}

export default AppBarCitySelect;
