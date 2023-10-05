/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { Row, Col, DatePicker, Image, Button, Card, List, Avatar } from 'antd';

import "../resources/css/Home.css"

import NavBarComponent from "../components/NavBarComponent"
import FooterComponent from "../components/FooterComponent"

import InicioSection from "../partials/InicioSection"
import Metodo1Section from "../partials/Metodo1Section"
import Metodo2Section from "../partials/Metodo2Section"
import Metodo3Section from "../partials/Metodo3Section"
import PrecioSection from "../partials/PrecioSection"

import imagePareja from "../resources/assets/home.png";
import imagePareja2 from "../resources/assets/Pareja.png";
import imageWhatsapp from "../resources/assets/Whatsapp.png";
import imageBannerCoffe from "../resources/assets/Component 2.svg";
import imageArrow from "../resources/assets/Arrow Right ✅.png";

import imageTenedor from "../resources/assets/Union.png";
import imageCorazon from "../resources/assets/Heart Off ✅.png";
import imageLuna from "../resources/assets/Component 1.png";
import imageCamino from "../resources/assets/Vector.png";

export default function HomePage() {

  const [colorNav, setColorNav] = useState("transparent");
  const [width, setWidth] = useState(0);
  const [toggleLogo, setToggleLogo] = useState(false);
  const [globo1, setGlobo1] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      // console.log('... window.scrollY: ', window.scrollY);

      if (window.scrollY && window.scrollY > 200) {
        setColorNav("white");
      } else {
        setColorNav("transparent");
      }
      
      setWidth(screen.width);
      setToggleLogo(window.scrollY);
        
      if ( window.innerWidth >= 768 ) {
        if (window.scrollY && window.scrollY > 1900) {
          setGlobo1( true );
        }
      } else {
        if (window.scrollY && window.scrollY > 2900) {
          setGlobo1( true );
        }
      } 

    };
  }, []);

  return (<>
    <div className="body-content">
      <NavBarComponent key="1" colorNav={colorNav} toggleLogo={toggleLogo} width={width} />

      <InicioSection key="2" />

      <Metodo1Section />

      <Metodo2Section />

      <Metodo3Section globo1={globo1} />

      <PrecioSection key="3" />

    </div>
    
    <FooterComponent />
  </>)
}