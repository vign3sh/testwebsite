import AsyncSelect from 'react-select/async';
import { getSKUS } from '../actions/main.js';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { getCategoryItems } from '../actions/main.js';

function CustomSelect({backgroundColor, color, selected, updateItems, id, category}) {
    /*
    const filterColors = (inputValue) => {
        return options.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };
      */

      useEffect(() => {
        const fetchHotItems = async () => {
          const items = await getCategoryItems(id=id, category=category);
          updateItems(items);
        };
    
        fetchHotItems();
      }, []); 
      
    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            resolve(getSKUS(inputValue));
        });

    const handleChange = (selectedOptions) => {
        let select = selectedOptions.map(option => option.value);
        updateItems(select);
    };

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
          
          return {
            ...styles,
            backgroundColor: isFocused
            ? backgroundColor:
            color,
            color: isFocused
            ? color:
            "black",
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                  ? backgroundColor
                  : undefined,
              },
          };
        },
        
        multiValue: (styles) => {
          
          return {
            ...styles,
            backgroundColor: backgroundColor,
          };
        },
        multiValueLabel: (styles) => ({
          ...styles,
          color: color,
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          color: color,
          ':hover': {
            backgroundColor: backgroundColor,
            color: color,
          },
        }),
    };

    return (
        
        <AsyncSelect isMulti value={selected} defaultOptions 
        loadOptions={promiseOptions} styles={colourStyles} closeMenuOnSelect={false} 
        onChange={handleChange}/>
    );
    {/*<Select
            closeMenuOnSelect={false}
            
            isMulti
            options={options}
            styles={colourStyles}
        />*/}
}

export default CustomSelect