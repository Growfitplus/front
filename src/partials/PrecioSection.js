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
import imageBannerCoffe from "../resources/assets/Component 2.svg";
import imageArrow from "../resources/assets/Arrow Right ✅.png";

import imageTenedor from "../resources/assets/Union.png";
import imageCorazon from "../resources/assets/Heart Off ✅.png";
import imageLuna from "../resources/assets/Component 1.png";
import imageCamino from "../resources/assets/Vector.png";

export default function PrecioSection() {

    useEffect(() => {

    }, []);

    return (
        <section id="precio" className="precio">
            <Row className="pad-lat">
                <h1>
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
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="py-1">
                            <Card className="card-prices">
                                <h3>
                                    Solo <br />
                                    1 Sesión
                                </h3>
                                <div>
                                    <h2 className="text-left">
                                        <span className="t-green">
                                            $
                                        </span>
                                        35.000
                                    </h2>
                                    <p className="sub-muted-text"> </p>
                                </div>
                                <h5>
                                    Evaluación física <br />
                                    Plan Personalizado
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="py-1">
                            <Card className="card-prices">
                                <h3>
                                    Solo <br />
                                    1 Sesión
                                </h3>
                                <div>
                                    <h2 className="text-left">
                                        <span className="t-green">
                                            $
                                        </span>
                                        35.000
                                    </h2>
                                    <p className="sub-muted-text">
                                        $30.000 cada sesión
                                    </p>
                                </div>
                                <h5>
                                    Evaluación física <br />
                                    Plan Personalizado
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} className="py-1">
                            <Card className="card-prices">
                                <h3>
                                    Solo <br />
                                    1 Sesión
                                </h3>
                                <div>
                                    <h2 className="text-left">
                                        <span className="t-green">
                                            $
                                        </span>
                                        35.000
                                    </h2>
                                    <p className="sub-muted-text">
                                        $25.000 cada sesión
                                    </p>
                                </div>
                                <h5>
                                    Evaluación física <br />
                                    Plan Personalizado
                                </h5>
                                <div className="justify-content-center">
                                    <Link className="agendar-button" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                                        Agendar
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr style={{ marginBottom: '0px' }} />
            <Link to="mailto:growfitplus@gmail.com" target="_blank" rel="noopener noreferrer" className="container-link">
                <Row className="pad-lat py-2">
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} className="" >
                        <h3 className="text-dudas">¿Tienes dudas?</h3>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} className="">
                        <div className="li-to-email align-items-center">
                            <div rel="noopener noreferrer" className="container-lonk-to-email">
                                <h3>growfitplus@gmail.com</h3>
                                <img alt="" className="icon-image" src={imageArrow} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Link>
        </section>
    )
}