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

const NavBarComponent = ({ colorNav, toggleLogo, width }) => {
    const [toggle, setToggle] = useState(false);
    const [menuSelected, setMenuSelected] = useState('1');

    function closeMenu(){
        changeMenu(false);
    }

    async function changeMenu(flag){
        // console.log("flag: ", flag)

        await setToggle(flag ? flag : !toggle);
        document.body.style.overflow = (flag != null ? !flag : toggle) ? "auto" : "hidden"
    }

    function scrollToComponent(item, key = '1'){
        scroller.scrollTo(item,{
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
        setMenuSelected([key]);
        changeMenu(false);
    }
        
    useEffect(() => {
        if (toggleLogo >= 2700) {
            setMenuSelected(["3"]);
        } else if (toggleLogo >= 800) {
            setMenuSelected(["2"]);
        } else {
            setMenuSelected(["1"]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggleLogo]);

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
        <Layout className={toggleLogo >= 800 ? 'layoutHeader scrolled' : 'layoutHeader'} style={{ background: colorNav, height: (toggleLogo >= 800 ? 128 : 80), justifyContent: (toggleLogo >= 800 ? 'center' : 'flex-end') }}>
            <Header className="header" style={{ background: colorNav, alignItems: (toggleLogo >= 800 ? 'center' : 'flex-end') }}>
                <div className="align-items-center container-logo">
                    <LogoComponent toggleLogo={toggleLogo} width={width} />
                </div>

                <div />
                <div />
                <div />
                
                <Menu className="menu-desktop" mode="horizontal" selectedKeys={menuSelected} style={{ paddingBottom: (toggleLogo >= 800 ? '1.1rem' : '0') }}>
                    <Menu.Item key="1" onClick={() => scrollToComponent("inicio", "1")} className={(toggleLogo >= 800 ? 'no-pt' : '') }>
                        <Link>
                            Inicio
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => scrollToComponent("metodo1", "2")} className={(toggleLogo >= 800 ? 'no-pt' : '') }>
                        <Link>
                            El Método
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => scrollToComponent("precio", "3")} className={(toggleLogo >= 800 ? 'no-pt' : '') }>
                        <Link>
                            Precio
                        </Link>
                    </Menu.Item>
                </Menu>

                <div className="align-items-end">
                    <Link className="agendar-button-nav" to="https://api.whatsapp.com/send?phone=58xxxxxxxxxx&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer">
                        Agendar
                    </Link>
                    {/* <button className="menu-button-nav" onClick={closeMenu}>
                        <img alt="" src={toggle ? imageCloseMenu : imageMenu} />
                    </button> */}
                    <div className="menu-button-nav-2" onClick={closeMenu}>
                        <img alt="" src={toggle ? imageCloseMenu : imageMenu} />
                    </div>
                </div>

                { toggle && <div className="menu-mobile">
                    <Menu mode="vertical" defaultSelectedKeys={['1']}>
                        <Menu.Item className="px-0 my-1 custom-list-item" key="1" to="#inicio">
                            <Link onClick={() => scrollToComponent("inicio", "1")}>
                                <h1 className="ml-0">Inicio</h1>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="px-0 my-1 custom-list-item" key="2" to="#metodo1">
                            <Link onClick={() => scrollToComponent("metodo1", "2")}>
                                <h1 className="ml-0">El Método</h1>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="px-0 my-1 custom-list-item" key="3" to="#precio">
                            <Link onClick={() => scrollToComponent("precio", "3")}>
                                <h1 className="ml-0">Precio</h1>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Link className="boton-menu-agendar" to="https://api.whatsapp.com/send?phone=+56982554625&text=Buen%20día%20quiero%20agendar%20una%20sesión" target="_blank" rel="noopener noreferrer"
                    >
                        <h1 className="ml-0">Agendar</h1>
                        <img alt="" className="icon-image-menu" src={imageArrow} />
                    </Link>
                    <div></div>
                </div> }

            </Header>
        </Layout>
    )
};

export default NavBarComponent;