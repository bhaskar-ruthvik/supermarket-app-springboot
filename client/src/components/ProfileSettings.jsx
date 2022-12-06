import React, { useState,useEffect } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
// import Link from '@mui/material/Link'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import {Link} from 'react-router-dom'

const ProfileSettings = () => {
const [i,setI] = useState(0)
useEffect(()=>{
  if(window.localStorage.getItem("signin")=="true"){
    setI(1)
  }
},[])
  const message=["Become a user","Sign out"]
  
  return (
    <Box sx={flexCenter}>
    {i==0&&<Link to="/signup/customer">{message[0]}</Link>}
    {i==1&&<Link to="/signout">{message[1]}</Link>}
    <Stack>
    
       {window.localStorage.getItem("type")=="-1"&& <Link to="/cart"><Button>
            <IoCartOutline size={24} />
        </Button>
        </Link>}
        <Button 
        sx={{
            borderRadius: 10, border: '1px solid #ddd'
        }}>
       {window.localStorage.getItem("type")=="-1"&& <Link to="/orders">
        <Stack>
            <AiOutlineMenu size={24}/>
            <FaRegUserCircle size={24}/>
          
        </Stack>
        </Link> }
        {window.localStorage.getItem("type")=="0"&& <Link to="/admin">
        <Stack>
            <AiOutlineMenu size={24}/>
            <FaRegUserCircle size={24}/>
          
        </Stack>
        </Link> }

        </Button>
    </Stack>
    </Box>
  )
}

export default ProfileSettings