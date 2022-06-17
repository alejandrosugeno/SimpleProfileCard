import React from 'react';
import lin from "../images/lin.svg";
import ins from "../images/ins.svg"
import '../styles/Footer.css'
const Footer = () => {
    return (
        <div class="card-footer">
            <div class="footer-item">
                <p class="status">  <span><img src={lin} alt="" /></span> Yaretas24</p>
            </div>
            <div class="footer-item">
                <p class="status">  <span><img src={ins} alt="" /></span> Yaretas24</p>
            </div>
        </div>
    );
};

export  {Footer};