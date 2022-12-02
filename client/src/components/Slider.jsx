import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300, marginTop: 1 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={5000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={100}
        min={1000}
        max={10000}
      />
    </Box>
  );
}
