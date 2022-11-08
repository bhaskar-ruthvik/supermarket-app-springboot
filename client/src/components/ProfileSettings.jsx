import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
// import Link from '@mui/material/Link'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import {Link} from 'react-router-dom'

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
    <Link to="/signup"> Become A User</Link>
    <Stack>
        <Button>
            <BsGlobe size={24} />
        </Button>
        <Button 
        sx={{
            borderRadius: 10, border: '1px solid #ddd'
        }}>
        <Stack>
            <AiOutlineMenu size={24}/>
            <FaRegUserCircle size={24}/>
        </Stack>

        </Button>
    </Stack>
    </Box>
  )
}

export default ProfileSettings