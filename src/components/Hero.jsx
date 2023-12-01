import React from 'react'
import HeroImagen from '../assets/hero.jpg'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
        <picture>
            <img src={ HeroImagen } alt="Imagen Hero" />
        </picture>
        <h1 className='hero__titulo'>Páginas webs personalizadas</h1>
    </div>
  )
}
