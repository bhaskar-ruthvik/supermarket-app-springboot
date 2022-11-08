import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { flexCenter } from 'themes/commonStyles';



const Logo = () => {
  return (
   <Box sx={flexCenter}>
  
  <i class="fa-solid fa-cart-shopping"></i>
    <Typography
    sx={{
        ml:1,
        color: theme => theme.palette.secondary.main,
        fontSize: '20px',
        fontWeight: 'bold',
    }}
    component="h3">
    SmartMart

    </Typography>
   </Box>
  )
}

export default Logo