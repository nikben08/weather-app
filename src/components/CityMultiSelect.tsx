import React, { useState } from 'react';
import Select from 'react-select';
import citiesData from '../data/cities.json';
import { City } from '../app/types';

interface Option {
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
  const cities: City[] = citiesData;
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

  const filterOptions = (inputValue: string) => {
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0, 20); // Limit to first 20 filtered cities
    const filteredOptions = filteredCities.map(city => ({
      value: city.id,
      label: `${city.name}, ${city.country}`
    }));
    setFilteredOptions(filteredOptions);
  };

  return (
    <>
      <Select
        options={filteredOptions}
        onInputChange={filterOptions}
        isMulti={true}
        styles={customStyles}
      />
    </>
  );
};

export default CityMultiSelect;
