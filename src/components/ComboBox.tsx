/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Box from '@mui/material/Box';
import { useMemo, useState } from 'react';
import Select from 'react-select';

interface ComboBoxProps {
  list: any;
  wantedKey: string;
  placeholder: string;
  labelKey: string;
  isDisabled?: boolean;
  item?: string;
  setItem: (item: any) => void;
  initialState?: any;
  shouldReturnWholeObject?: boolean;
  className?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  list,
  wantedKey,
  placeholder,
  labelKey,
  item,
  isDisabled,
  initialState = '',
  setItem,
  shouldReturnWholeObject,
  className,
}) => {
  const getOptionLabel = (option: any) => option[labelKey];
  const handleChange = (option: any | null) => {
    const selectedItem = option ? (shouldReturnWholeObject ? option : option[wantedKey]) : '';
    setItem(selectedItem || initialState);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const sortedList = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    if (term === '') {
      return list.map((item: { [x: string]: any }) => ({
        ...item,
        value: item[wantedKey],
        label: item[labelKey],
      }));
    }

    const exactMatches: any[] = [];
    const startMatches: any[] = [];
    const containMatches: any[] = [];
    const endMatches: any[] = [];

    list.forEach((item: { [x: string]: string }) => {
      const label = item[labelKey].toLowerCase();

      if (label === term) {
        exactMatches.push(item);
      } else if (label.startsWith(term)) {
        startMatches.push(item);
      } else if (label.includes(term)) {
        containMatches.push(item);
      } else if (label.endsWith(term)) {
        endMatches.push(item);
      }
    });
    return [...exactMatches, ...startMatches, ...containMatches, ...endMatches].map((item) => ({
      ...item,
      value: item[wantedKey],
      label: item[labelKey],
    }));
  }, [list, labelKey, wantedKey, searchTerm]);

  const optionsToShow = sortedList.slice(0, 25);



  return (
    <Box flex="2">
      <Select
        defaultValue={list.find((listItem: { [x: string]: any }) => listItem[wantedKey] === item)}
        className={`${className ?? ''}}}`}
        onInputChange={setSearchTerm}
        getOptionLabel={getOptionLabel}
        onChange={handleChange}
        options={optionsToShow}
        placeholder={placeholder}
        isClearable={true}
        isDisabled={isDisabled}
        isSearchable={true}
        isMulti={false}
        noOptionsMessage={() => 'Aranan seçenek bulunamadı!'}
      />
    </Box>
  );
};

export default ComboBox;
