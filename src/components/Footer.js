import React from 'react';
import './Footer.css';
import { ImFacebook2 } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { GrMailOption } from 'react-icons/gr';



function Footer() {
    return (
        <div className='footer'>
            
            <div className='footer__logo'>

                <div className='footer__icon'>

                    <a href=" "> <ImFacebook2 /></a> 

                </div>

                <div className='footer__icon'>
                   
                    <a href=" ">  <ImTwitter /> </a>

                </div >

                <div className='footer__icon'>
                    
                    <a href=" ">  <SiInstagram /> </a>

                </div>

                <div className='footer__icon'>
                   
                    <a href=" ">  <GrMailOption /> </a>

                </div>
            </div>

            <div className='footer__copyright'>
               
                &copy; 2020, Maxirexy Cinema

            </div>

        </div>
    )
}

export default Footer
