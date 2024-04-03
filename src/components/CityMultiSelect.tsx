import { useState } from 'react';
import Select from 'react-select';
import citiesData from '../data/cities.json';
import { City } from '../app/types';
import { Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';
import { getWeatherForcastingActions } from '../stores/WeatherForcastingStore';

interface Option {
  id: number;
  value: number;
  label: string;
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#1E1E29', // Background color of the control
    borderColor: state.isFocused ? '#666' : '#444', // Border color when focused or not
    '&:hover': { borderColor: '#666' }, // Border color on hover
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#3B3B54', // Background color of the option
    color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#ccc', // Text color of the option
    '&:hover': { backgroundColor: state.isSelected ? '#3B3B54' : '#3B3B54' }, // Background color on hover
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#666', // Background color of the selected value
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#fff', // Text color of the selected value
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#ccc', // Remove icon color of the selected value
    ':hover': {
      backgroundColor: '#444', // Background color of the remove icon on hover
      color: '#fff' // Text color of the remove icon on hover
    }
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#fff', // Text color of the typed text
    backgroundColor: '#1E1E29'// Background color of the input when focused or not
  })
};

const CityMultiSelect = () => {
  const { setSelectedCityIds } = getWeatherForcastingActions();
  const navigate = useNavigate();
  const cities: City[] = citiesData;
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const filterOptions = (inputValue: string) => {
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0, 20); // Limit to first 20 filtered cities
    const filteredOptions = filteredCities.map(city => ({
      id: city.id,
      value: city.id,
      label: `${city.name}, ${city.country}`
    }));
    setFilteredOptions(filteredOptions);
  };

  const handleSelectChange = (selectedOptions: Option[]) => {
    setSelectedOptions(selectedOptions);
  };


  const handleGetWeatherForcast = () => {
    const selectedCityIds = selectedOptions.map(option => option.id); // Extract IDs from selectedOptions
    setSelectedCityIds(selectedCityIds); // Set only the list of IDs
    navigate('/weather-forcast');
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          width: 400,
        }}
      >
        Mevcut Konumu Kullan <PlaceIcon />
      </Button>
      <Select
        options={filteredOptions}
        onInputChange={filterOptions}
        isMulti={true}
        onChange={handleSelectChange}
        styles={customStyles}
      />
      <Button
        onClick={handleGetWeatherForcast}
        variant="outlined"
        sx={{
          marginTop: 5,
          width: 400,
        }}
      >
        Ara
      </Button>
    </>
  );
};

export default CityMultiSelect;
