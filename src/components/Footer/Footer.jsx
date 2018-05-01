import React, { Component } from 'react'
import whiteLogo from '../../media/logo-white.svg'
import './footer.css'

const Footer = () => (
    <div className="footer">
        <img src={whiteLogo} className="logo" alt="King's Real Estate" />
        <ul className="social-media">
            <li classname="sm">
                <a className="sm-link" href="https://www.facebook.com/SKestatesGI" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook"></i> SkEstatesGI
                </a>
            </li>
            <li classname="sm">
                <a className="sm-link" href="https://twitter.com/SKestatesGI" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i> SkEstatesGI
                </a>
            </li>
            <li classname="sm">
                <a className="sm-link" href="https://instagram.com/SKestatesGI" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i> SkEstatesGI
                </a>
            </li>
        </ul>
        <p className="details">
            <i class="fas fa-building"></i> 116a (2) Main Street, Gibraltar, GX111AA,
            <i class="fas fa-phone"></i><a href="tel:+35054062828" >+350 54062828</a>,
            <i class="fas fa-envelope"></i><a href={`mailto:stephanie@sk-estates.com`}>Stephanie@sk-estates.com</a>
        </p>
    </div>
)

export default Footer
