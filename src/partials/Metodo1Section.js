import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import "../resources/css/Home.css"

export default function Metodo1Section() {

  useEffect(() => {

  }, []);

  return (
    <section id="metodo1" className="metodo1">
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 10 }} className="pad-lat" >
          <Row>
            <h1 className="text-extra bold">
              El <br />
              Método
            </h1>
          </Row>
          <Row>
            <h4>
              Sabemos que el sobrepeso es multifactorial, por ese motivo necesitas adoptar hábitos saludables sostenibles en el tiempo. Olvídate de las dietas restrictivas que no funcionan y abraza un cambio real.
            </h4>
            <h4>
              Con nuestro método basado en un déficit calórico, ayuno intermitente, sueño reparador y actividad física, llegarás a tu meta definitiva.
            </h4>
          </Row>
        </Col>

        <Col xs={{ span: 24 }} lg={{ span: 14 }} className="">
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} className="pad-lat">
              <Row>
                <h2>
                  Las <br />
                  Sesiones
                </h2>
              </Row>
              <Row>
                <h5>
                  Agenda sesiones por videollamada con nuestros especialistas en preparación física. Analizaremos tu estilo de vida para encontrar la mejor estrategia para que logres tus metas a través de nuestro método de cambio progresivo.
                </h5>
              </Row>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 12 }} className="pad-lat">
              <Row>
                <h2>
                  Cambio <br />
                  Progresivo
                </h2>
              </Row>
              <Row>
                <h5>
                  Recuperar nuestro cuerpo luego de descuidarlo por años no se repara en uno o dos meses con la dieta de moda o con pastillas milagrosas. Debemos adaptarnos para crear un proceso constante y gradual para lograr nuestro objetivo.
                </h5>
              </Row>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 1 }} className="">
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 11 }} className="pad-lat">
              <Row>
                <h2>
                  El <br />
                  Seguimiento
                </h2>
              </Row>
              <Row>
                <h5>
                  Llevamos el registro de tus avances para ver como va tu evolución a través del IMC, peso y registro fotográfico. <br />
                  Sabemos que tienes dudas por lo mismo estamos disponible a resolver las dudas que tengas durante tu proceso de cambio.
                </h5>
              </Row>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 12 }} className="pad-lat">
              <Row>
                <h2>
                  Los <br />
                  Resultados
                </h2>
              </Row>
              <Row>
                <h5>
                  <strong>¡Te espera un cambio increíble!</strong> Por fin alcanza tu mejor versión, además de aumentar tu esperanza de vida, eliminar la (dañina) grasa visceral, regular tus niveles glucémicos en sangre o incluso revertir la resistencia a la insulina.
                </h5>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}