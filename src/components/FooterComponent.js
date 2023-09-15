/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import LogoComponent from "../components/LogoComponent"
import styles from "../resources/Footer.css.json"

import imageInstagram from "../resources/assets/Instagram.png";
import imageTiktok from "../resources/assets/Tik Tok.png";

const { Header } = Layout;

const FooterComponent = () => {
    return (
        <Layout theme="dark" style={styles.layoutFooter}>
            <footer style={styles.layoutFooter.footer}>
                <div className="align-items-center">
                    © 2023. growfit+
                </div>
                <div style={styles.layoutFooter.footer.links}>
                    <Link className="link-foot-social" to="https://www.instagram.com/growfik_agency" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="icon-image-min" src={imageInstagram} />
                        Instagram
                    </Link>
                    <Link className="link-foot-social" to="https://www.tiktok.com/@growfik" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="icon-image-min" src={imageTiktok} />
                        TikTok
                    </Link>
                </div>
            </footer>
        </Layout>
    )
};

export default FooterComponent;