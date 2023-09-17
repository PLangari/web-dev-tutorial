import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <Box className='container'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/experience" className='link'>Experience</Link>
        </Box>
    </div>
  )
}

export default Navbar;