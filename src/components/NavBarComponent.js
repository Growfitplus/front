/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import LogoComponent from "../components/LogoComponent"
import styles from "../resources/NavBar.css.json"
import imageMenu from "../resources/assets/Group 204976289.png";
import imageCloseMenu from "../resources/assets/Clear ✅.png";
import imageArrow from "../resources/assets/Arrow Right ✅.png";
import { scroller } from "react-scroll";

const { Header } = Layout;

const NavBarComponent = ({ colorNav, toggleLogo }) => {
    const [toggle, setToggle] = useState(false);

    function closeMenu(){
        changeMenu(false);
    }

    async function changeMenu(flag){
        // console.log("flag: ", flag)

        await setToggle(flag ? flag : !toggle);
        document.body.style.overflow = (flag != null ? !flag : toggle) ? "auto" : "hidden"
    }

    function scrollToComponent(item){
        scroller.scrollTo(item,{
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
        })
        changeMenu(false);
    }
        
    /* useEffect(() => {
        window.onscroll = function() {
            console.log('... window.scrollY: ', window.scrollY);
        
            if (window.scrollY && window.scrollY > 300) {
                setColorNav("white");
            } else {
                setColorNav("transparent");
            }

        };
    }, []); */
    
    return (
        <Layout className="layoutHeader" style={{ background: colorNav }}>
            <Header className="header" style={{ background: colorNav }}>
                <div className="align-items-center container-logo">
                    <LogoComponent toggleLogo={toggleLogo} />
                </div>

                <div />
                
                <Menu className="menu-desktop" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => scrollToComponent("inicio")}>
                        <Link>
                            Inicio
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => scrollToComponent("metodo1")}>
                        <Link>
                            El Método
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => scrollToComponent("precio")}>
                        <Link>
                            Precio
                        </Link>
                    </Menu.Item>
                </Menu>

                <div className="align-items-end">
                    <Link className="agendar-button-nav" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                        Agendar
                    </Link>
                    <Button className="menu-button-nav" onClick={closeMenu}>
                        <img alt="" src={toggle ? imageCloseMenu : imageMenu} />
                    </Button>
                </div>

                { toggle && <div className="menu-mobile">
                    <Menu mode="vertical" defaultSelectedKeys={['1']}>
                        <Menu.Item className="px-0 my-1" key="1" to="#inicio">
                            <Link onClick={() => scrollToComponent("inicio")}>
                                <h2 className="ml-0">Inicio</h2>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="px-0 my-1" key="2" to="#metodo1">
                            <Link onClick={() => scrollToComponent("metodo1")}>
                                <h2 className="ml-0">El Método</h2>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="px-0 my-1" key="3" to="#precio">
                            <Link onClick={() => scrollToComponent("precio")}>
                                <h2 className="ml-0">Precio</h2>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Link className="boton-menu-agendar" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer"
                    >
                        <h2 className="ml-0">Agendar</h2>
                        <img alt="" className="icon-image-menu" src={imageArrow} />
                    </Link>
                    <div></div>
                </div> }

            </Header>
        </Layout>
    )
};

export default NavBarComponent;