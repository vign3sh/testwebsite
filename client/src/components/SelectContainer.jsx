import React from 'react'
import Form from 'react-bootstrap/Form';
import CustomSelect from '../hooks/CustomSelect.jsx';


function SelectContainer({label, items, updateItems, id, category}) {

    let selected = !items?[]:items.map(item => {return {label: item, value: item}});
    
    return (
    <>
        <Form.Label>{label}</Form.Label>
        <CustomSelect backgroundColor="#EA6676" color="white" selected={selected} updateItems={updateItems} id={id} category={category}/>
    </>
    )
}

export default SelectContainer