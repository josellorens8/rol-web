import React from 'react';
import './Header.css';
import LogoVerde from '../assets/rol-verde.png'


export const Header = () => {
    return (
        <header>
            <nav className='header__nav container'>
                <picture className='header__logo'>
                    <img src={LogoVerde} alt="Logo Rol" />
                </picture>
                <ul className='header__menu'>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                    <li><a href="#">link 3</a></li>
                    <li><a href="#">link 4</a></li>
                </ul>
            </nav>
        </header>
    )
}
