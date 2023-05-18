import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Navbar = ({setMovieName}) => {
  const [value, setValue] = useState('')

const handleChange = (e) => {
  setValue(e.target.value)
}

const handleClick = (e) => {
  e.preventDefault()
  setMovieName(value)

 }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'#001219' }}>
        <Toolbar>
          <LocalMoviesIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Dosis' }}>
            TechFlix
          </Typography>
          <Box className='searchContainer'>
            <InputBase onChange={(e)=>handleChange(e)} value={value} className='searchInput'  placeholder="Find a movie.."/>
            <Button onClick={(e)=>handleClick(e)} variant='contained' sx={{backgroundColor:'#EE9B00 !important', color:'black', borderRadius:'15px', fontFamily:'Poppins'}}>Search</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;