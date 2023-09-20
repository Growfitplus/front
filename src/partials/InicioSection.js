/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { Row, Col, DatePicker, Image, Button, Card, List, Avatar } from 'antd';
import NavBarComponent from "../components/NavBarComponent"
import FooterComponent from "../components/FooterComponent"
import "../resources/css/Home.css"

import imagePareja from "../resources/assets/home.png";
import imagePareja2 from "../resources/assets/Pareja.png";
import imageWhatsapp from "../resources/assets/Whatsapp.png";
import imageWhatsapp2 from "../resources/assets/Whatsapp2.png";
import imageBannerCoffe from "../resources/assets/Component 2.svg";
import imageArrow from "../resources/assets/Arrow Right ✅.png";

import imageTenedor from "../resources/assets/Union.png";
import imageCorazon from "../resources/assets/Heart Off ✅.png";
import imageLuna from "../resources/assets/Component 1.png";
import imageCamino from "../resources/assets/Vector.png";

export default function InicioSection() {

  const [hoverAgendar1, setHoverAgendar1] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <section id="inicio" className="inicio">
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 11 }} className="inicio-left">
          <div>
            <h1>
              Baja <br />
              esos kilos <br />
              sin dietas
            </h1>
            <h3 className="text-secundario-inicio">
              Pastillas “milagrosas” <br />
              Cirugías <br />
              Efecto Rebote
            </h3>
            <div className="flex">
              <Link className="boton-inicio-agendar" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHoverAgendar1(true)}
              onMouseLeave={() => setHoverAgendar1(false)}
              >
                Agendar sesión
                <img alt="" className="icon-image" src={ hoverAgendar1 ? imageWhatsapp2 : imageWhatsapp } />
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 13 }} className="inicio-rigth">
          <img alt="" src={imagePareja} />
        </Col>
      </Row>
    </section>
  )
}