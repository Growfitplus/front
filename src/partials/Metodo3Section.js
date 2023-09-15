/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { Row, Col, DatePicker, Image, Button, Card, List, Avatar } from 'antd';
import NavBarComponent from "../components/NavBarComponent"
import FooterComponent from "../components/FooterComponent"
import "../resources/css/Home.css"
import FadeCompoent from "../components/FadeComponent";

import imagePareja from "../resources/assets/home.png";
import imagePareja2 from "../resources/assets/Pareja.png";
import imageWhatsapp from "../resources/assets/Whatsapp.png";
import imageBannerCoffe from "../resources/assets/Component 2.svg";
import imageArrow from "../resources/assets/Arrow Right ✅.png";

import imageTenedor from "../resources/assets/Union.png";
import imageCorazon from "../resources/assets/Heart Off ✅.png";
import imageLuna from "../resources/assets/Component 1.png";
import imageCamino from "../resources/assets/Vector.png";

export default function Metodo3Section({ globo1 }) {
    
    const extraStyles = {
    };

    return (
        <section className="metodo3">
            <img alt="" src={imageBannerCoffe} className="image-banner-coffe" />

            <div>
                <FadeCompoent show={globo1} duration={500} style={extraStyles}>
                    <div id="globo-1" className="globo globo-1">
                        Mitos que debes ignorar
                    </div>
                </FadeCompoent>

                <FadeCompoent show={globo1} duration={1000} style={extraStyles}>
                    <div id="globo-2" className="globo globo-2">
                        <strong>Los carbohidratos engordan.</strong> Eso es falso, solo hay que cuidar la cantidad que consumes
                    </div>
                </FadeCompoent>

                <FadeCompoent show={globo1} duration={1500} style={extraStyles}>
                    <div id="globo-3" className="globo globo-3">
                        <strong>Las grasas engordan.</strong> Existen grasas saludables solo hay que evitar consumirlas en exceso.
                    </div>
                </FadeCompoent>

                <FadeCompoent show={globo1} duration={2000} style={extraStyles}>
                    <div id="globo-4" className="globo globo-4">
                        <strong>El café con limón adelgaza.</strong> No existe evidencia que lo valide
                    </div>
                </FadeCompoent>

                <FadeCompoent show={globo1} duration={2500} style={extraStyles}>
                    <div id="globo-5" className="globo globo-5">
                        <strong>Las dietas de moda.</strong> Ayudan al corto plazo, pero a mediano plazo generan ansiedad que te hace volver al peso inicial o más
                    </div>
                </FadeCompoent>

            </div>
        </section >
    )
}