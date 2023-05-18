import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

//#EE9B00
// #001219
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'#001219' }}>
        <Toolbar>
          <LocalMoviesIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TechFlix
          </Typography>
          <Box className='searchContainer'>
            <InputBase className='searchInput'  placeholder="Find a movie.."/>
            <Button variant='contained' sx={{backgroundColor:'#EE9B00 !important', color:'black', borderRadius:'15px'}}>Search</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;