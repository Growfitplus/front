import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Row, Col } from 'antd';
import "../resources/css/Home.css"

import imagePareja from "../resources/assets/home.svg";
import imageWhatsapp from "../resources/assets/Whatsapp.png";
import imageWhatsapp2 from "../resources/assets/Whatsapp2.png";


export default function InicioSection() {

  const [hoverAgendar1, setHoverAgendar1] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <section id="inicio" className="inicio">
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12 }} className="inicio-left">
          <div>
            <h1 className="show-sm bold">
              Baja <br />
              esos kilos <br />
              sin dietas
            </h1>
            <h1 className="show-md bold">
              Baja esos<br />
              kilos sin<br />
              dietas
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
        <Col xs={{ span: 24 }} lg={{ span: 12 }} className="inicio-rigth">
          <img alt="" src={imagePareja} />
        </Col>
      </Row>
    </section>
  )
}