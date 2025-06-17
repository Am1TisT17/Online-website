import React, { useState, useRef } from "react";
import './OurTrustedPartners.scss'
import alo from '../../assets/img/alo.svg';
import brand from '../../assets/img/brandimage.svg';

export default function OurTrustedPartners() {
    return (
        <main>
            <div className="trusted-partners-section">
                <div className="text-content">
                    <img src={alo} alt="alo1" className="alo-img"/>
                    <h6>Our Trusted Partners</h6>
                    <h2>We Have More Than <span>4263+</span> <br/>Global Partners</h2>
                </div>
                <div className="brand-images">
                    <img src={brand} alt="brand" className="brand-img"/>
                </div>
            </div>
        </main>
    )
}