import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { useState, useEffect } from 'react';
export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    const scrollTarget = document.getElementsByClassName('main ' + event.target.value)

    if (scrollTarget)
      scrollTarget[0].scrollIntoView({ behavior: 'smooth' });

    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  useEffect(() => {
    window.addEventListener('scroll',(e)=>{
      // console.log(e);
    })
  }, []);

  return (

    <div className='radio-buttons-wrapper' style={{ opacity: 0.5 }}>
      <Radio {...controlProps('a')} />
      <Radio {...controlProps('b')} color="secondary" />
      <Radio {...controlProps('c')} color="success" />
      <Radio {...controlProps('d')} color="default" />
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}