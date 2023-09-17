import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <Box className='container'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/projects" className='link'>Projects</Link>
        </Box>
    </div>
  )
}

export default Navbar;