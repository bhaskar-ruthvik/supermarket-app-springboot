import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from 'data/mock-data';
import CarouselCard from './CarouselCard';


const LocationCards = () => {
  const [backend,setBackend]= useState([]);
useEffect(()=>{
  fetch("http://localhost:8080/api/v1/item")
  .then(res=>{return res.json()})
  .then(data=>{
    console.log(data)
    setBackend(data)
    console.log(backend)
  })
},[])
for(let i=0; i< backend.length;i++){
    backend[i]["locationImages"] = cardLocations[i]["locationImages"]
}
  const [cards] = useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {backend.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;