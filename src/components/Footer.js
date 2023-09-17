import React from 'react';
import { Instagram, LinkedIn, Facebook } from '@mui/icons-material';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            <LinkedIn />
            <Instagram />
            <Facebook />
        </div>
        <p> &copy; 2022 ParsaLangari.com </p>
    </div>
  )
}

export default Footer