import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import "../resources/css/Home.css"

import imagePareja2 from "../resources/assets/Pareja.svg";

import imageTenedor from "../resources/assets/Union.png";
import imageCorazon from "../resources/assets/Heart Off ✅.png";
import imageLuna from "../resources/assets/Component 1.png";
import imageCamino from "../resources/assets/Vector.png";

export default function Metodo2Section() {

    useEffect(() => {

    }, []);

    return (
        <section className="metodo2">
            <Row>
                <Col xs={{ span: 24, order: 1 }} lg={{ span: 13, order: 2 }} className="pad-lat">
                    <h1 className="bold">
                        ¿Con cuál te <br />
                        identificas?
                    </h1>
                    <Row>

                        <ul>
                            <li className="ident-list-item">
                                <div className="container-icon-list">
                                    <img alt="" className="icon-list" src={imageTenedor} />
                                </div>
                                <h2 className="list-item-ident">Como en exceso</h2>
                            </li>
                            <li className="ident-list-item">
                                <div className="container-icon-list">
                                    <img alt="" className="icon-list" src={imageCorazon} />
                                </div>
                                <h2 className="list-item-ident">Vivo con estrés</h2>
                            </li>
                            <li className="ident-list-item">
                                <div className="container-icon-list">
                                    <img alt="" className="icon-list" src={imageLuna} />
                                </div>
                                <h2 className="list-item-ident">Duermo poco</h2>
                            </li>
                            <li className="ident-list-item">
                                <div className="container-icon-list">
                                    <img alt="" className="icon-list" src={imageCamino} />
                                </div>
                                <h2 className="list-item-ident">No hago ejercicio</h2>
                            </li>
                        </ul>

                    </Row>
                </Col>
                <Col xs={{ span: 24, order: 2 }} lg={{ span: 11, order: 1 }} className="pad-lat align-items-center" >
                    <img alt="" src={imagePareja2} />
                </Col>
            </Row>
        </section>
    )
}