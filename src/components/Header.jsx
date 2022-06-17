import React from 'react';
import imageHeader from '../images/headercard.png'
import perfil from '../images/perfil.jpg';
import '../styles/Header.css'
const Header = () => {
    return (
        <>
            <div class="card-header">
                <img src={imageHeader} alt=""/>
            </div>
            <div class="card-content">
                <img src={perfil} alt=""/>
                <div className="text">
                    <p className="name">Yarriba Castro</p>
                    <p className="profession">Desing Track</p>
                    <p className="quote">I chose design track because I love to design beautiful user-centered interfaces.</p>
                </div>
            </div>
        </>
    );
};

export  {Header};