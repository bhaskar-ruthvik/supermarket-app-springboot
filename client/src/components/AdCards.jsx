import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ads as cardAds } from 'data/mock-data';
import CarouselCard from './CarouselCard';
import CardLarge from './CardLarge';

const AdCards = () => {
  const [cards] = React.useState(cardAds);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid container rowSpacing={3} columnSpacing={3} sx={{mt:5, ml:2}}>
            <CardLarge location={location}/>
            </Grid>
            
          );
        })}
      </Grid>
    </Box>
  );
};

export default AdCards;