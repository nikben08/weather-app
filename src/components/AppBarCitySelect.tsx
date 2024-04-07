import { useState } from 'react';
import Select from 'react-select';
import { ThemeProvider, useTheme } from '@mui/material';
import citiesData from '../data/cities.json';
import { useQuery } from 'react-query';
import parseResponse from '../functions/parseResponse';
import { ApiResponse, ICityWeatherData } from '../app/types';
import { getCitiesWeatherDataReq } from '../api/getCitiesReq';
// import { MultiValue } from 'react-select/animated';

interface Option {
    id: number;
    value: string;
    label: string;
    weather: number;
}

interface City {
    id: number;
    name: string;
    state: string;
    country: string;
    coord: {
        lon: number;
        lat: number;
    };
}

function AppBarCitySelect() {
    const theme = useTheme();
    const limit = 20; // Specify the limit of options to display
    const cities: City[] = citiesData;
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(); // State to store filtered options
    const [filteredCities, setFilteredCities] = useState<City[]>();

    const {
        data: cityWeatherData,
        // isLoading: isCityWeatherDataLoading,
        refetch: refetchCityWeatherData,
    } = useQuery("get/CitiesWeatherData", () => getCitiesWeatherDataReq(getCityIds(filteredCities)), {
        cacheTime: 0,
        retry: 1,
        select: parseResponse as (
            response: ApiResponse<ICityWeatherData>
        ) => ICityWeatherData,
    });

    const filterCities = (searchValue: string) => {
        if (cities) {
            const filtered = cities
                .filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase()))
                .slice(0, limit);
            return filtered;
        } else {
            return [];
        }
    };

    const getCityIds = (options: City[] | undefined): string => {
        if (!options) return ''; // Return empty string if options are not defined
        return options.map(option => option.id.toString()).join(',');
    };

    const handleInputChange = (searchValue: string) => {
        const filtered = filterCities(searchValue);
        setFilteredCities(filtered);
        refetchCityWeatherData();
        const citiesConvertedToOptions = formatSelectOptions(filtered);
        setFilteredOptions(citiesConvertedToOptions);
    };

    const formatSelectOptions = (flCities: City[]) => {
        const options: Option[] = [];
        if (cityWeatherData) {
            flCities.forEach((city: City, index: number) => {
                const temperature = cityWeatherData.list[index]?.main.temp; // Access temperature property
                options.push({
                    value: city.name,
                    label: `${city.country}/${city.name}/${ Math.floor(temperature - 273.15) } °C`,
                    id: city.id,
                    weather: temperature ? temperature : 0, // Set default value if temperature is undefined
                });
            });
        }
        return options;
    };

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            width: 300, // Adjust the width as needed
            backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black', // Background color based on theme mode
            textAlign: 'left', // Align text to the left
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? (theme.palette.mode === 'light' ? 'lightgray' : 'darkgray') : null, // Background color for selected option
            color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color based on theme mode
        }),
        singleValue: (provided: any, state: any) => ({
            ...provided,
            color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color based on theme mode
        }),
        menu: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black', // Background color of the dropdown menu
            color: theme.palette.mode === 'light' ? 'black' : 'white', // Font color of the dropdown menu
            textAlign: 'left', // Align text to the left
            overflowY: 'auto', // Add scrollbar if the content exceeds the height
        }),
        dropdownIndicator: (provided: any, state: any) => ({ // Remove dropdown indicator
            ...provided,
            display: 'none',
        }),
        indicatorSeparator: () => ({}) // Remove indicator separator
    };

    const CustomOption = ({ data, ...props }: any) => (
        <div>
            <span>{data.label}</span>
            {data.weather && (<span>111</span>)} {/* Render WeatherIcon if weather data is available */}
        </div>
    );


    return (
        <ThemeProvider theme={theme}>
            <Select
                placeholder='Arama'
                options={filteredOptions}
                isSearchable={true}
                isMulti={false}
                noOptionsMessage={() => 'Aranan seçenek bulunamadı!'}
                styles={customStyles}
                onInputChange={handleInputChange}
                components={{ Option: CustomOption }}
            />
    
        </ThemeProvider>
    );
}

export default AppBarCitySelect;
