import hoverEffect from 'hover-effect'
import React, { useEffect, useRef } from 'react'

import sign from './images/sign.png'
import img1 from './mazyad_images/mazyad1.jpg'
import img2 from './mazyad_images/mazyad2.jpg'
import dest from './mazyad_images/dest.jpg'

export default function Header() {
    const image = useRef();
  
    useEffect(() => {
  
      new hoverEffect({
        parent: image.current,
        intensity: 0.1,
        image1: img1,
        image2: img2,
        displacementImage:dest
      });
    }, [image]);


    return (
      <div className="header section" id='header'>
          <div className='container'>
            <div className='image-div'>
               <div className="image" id="imgContainer" ref={image}/>
            </div>
            <h1 className='name'>MAZYAD ALJARAMANI</h1>
            <h2 className='job'>PHOTOGRAPHER</h2>
            <div className='sign-container'>
              <img className='sign' src={sign} alt='sign'></img>
            </div>
            <div className='links-div'>
                <div className='link link1'> 
                    <i className="fab fa-google"></i>
                    <a rel='noreferrer' target='_blank' href='mailto: mazyadalj1190@gmail.com'> mazyadalj1190@gmail.com</a>
                </div>
                <div className='link link2'> 
                    <i className="fab fa-instagram"></i>
                    <a rel='noreferrer' target='_blank' href='https://www.instagram.com/mazyad.alj/'> mazyad_photographey</a>
                </div>
                <div className='link link3'> 
                    <i className="fab fa-facebook"></i>
                    <a rel='noreferrer' target='_blank' href='https://www.facebook.com/Mazyadphotographer'> mazyad aljaramani</a>
                </div>
                <div className='link link4'> 
                    <i className="fab fa-whatsapp"></i>
                    <a rel='noreferrer' target='_blank' href='tel:+971 52 619 9709'> +971 52 619 9709</a>
                </div>
            </div>

          </div>
      </div>
    );
  }