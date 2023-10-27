import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { Row, Col, Card } from 'antd';
import "../resources/css/Home.css"

import imageArrow from "../resources/assets/Arrow Right ✅.svg";


export default function PrecioSection() {

    useEffect(() => {

    }, []);

    return (
        <section id="precio" className="precio pt-3">
            <Row className="pad-lat">
                <h1 className="bold">
                    Precios <br />
                    Pack de sesiones
                </h1>
            </Row>
            <Row className="pad-lat-h" >
                <Col xs={{ span: 24 }} lg={{ span: 8 }} className="pad-lat" >
                    <Row>
                        <h3>
                            <strong>Nuestros Coach son todos Preparadores físicos</strong>
                        </h3>
                    </Row>
                    <Row>
                        <h3>
                            ¿Qué hacemos en cada sesión?Analizamos las calorías que  tu cuerpo utiliza, qué hábitos debes mejorar y qué tipo de actividad física se adecua a tu necesidades.
                        </h3>

                        <h3>
                            Planifica tus sesiones con nuestros packs y ahorra en el total de las sesiones.
                        </h3>
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 16 }} className="pad-lat">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="col-price py-1">
                            <Card className="card-prices">
                                <h3 className="bold">
                                    Solo <br />
                                    1 Sesión
                                </h3>
                                <div>
                                    <h2 className="text-left price-number">
                                        <span className="t-green">
                                            $
                                        </span>
                                        35.000
                                    </h2>
                                    <p className="sub-muted-text">
                                        $35.000 cada sesión
                                    </p>
                                </div>
                                <h5 className="service-price">
                                    Evaluación física <br />
                                    Plan Personalizado
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=+56982554625&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="col-price py-1">
                            <Card className="card-prices">
                                <h3 className="bold">
                                    Pack <br />
                                    3 sesiones
                                </h3>
                                <div>
                                    <h2 className="text-left price-number">
                                        <span className="t-green">
                                            $
                                        </span>
                                        90.000
                                    </h2>
                                    <p className="sub-muted-text">
                                        $30.000 cada sesión
                                    </p>
                                </div>
                                <h5 className="service-price">
                                    Evaluación física<br />
                                    Plan Personalizado<br />
                                    Acompañamiento<br />
                                    Medición de resultados
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=+56982554625&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="col-price py-1">
                            <Card className="card-prices">
                                <h3 className="bold">
                                    Pack <br />
                                    6 sesiones
                                </h3>
                                <div>
                                    <h2 className="text-left price-number">
                                        <span className="t-green">
                                            $
                                        </span>
                                        150.000
                                    </h2>
                                    <p className="sub-muted-text">
                                        $25.000 cada sesión
                                    </p>
                                </div>
                                <h5 className="service-price">
                                    Evaluación física<br />
                                    Plan Personalizado<br />
                                    Acompañamiento<br />
                                    Medición de resultados
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=+56982554625&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr className="d-none d-md-block hr-bar" />

            <Row className="container-dudas">
                <Link to="mailto:growfitplus@gmail.com" target="_blank" role="div" className="pad-lat-mini py-2 container-link">
                    <Row className="w-100">
                        <Col xs={{ span: 24 }} lg={{ span: 12 }} className="" >
                            <h3 className="text-dudas">¿Tienes dudas?</h3>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 24 }} className="d-block d-md-none" >
                            <hr className="d-flex d-md-none hr-bar" />
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }} className="">
                            <div className="li-to-email align-items-center">
                                <Link to="mailto:growfitplus@gmail.com" target="_blank" rel="noopener noreferrer" className="container-lonk-to-email">
                                    <h3 className="link-agendar">growfitplus@gmail.com</h3>
                                    <img alt="" className="icon-image" src={imageArrow} />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Link>
            </Row>
        </section>
    )
}