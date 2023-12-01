import React from 'react'
import './Servicio.css'
export const Servicio = ( {name, icono, descripcion } ) => {
  return (
    <article className='servicio__articulo'>
    <picture className='servicio__icono'>
        <img src={ icono } alt={ name } />
    </picture>
    <h2 className='servicio__titulo'>{name}</h2>
    <p className='servicio__descripcion'>{descripcion}</p>
    </article>
    )
}
