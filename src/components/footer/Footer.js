import React from 'react';
import './Footer.css'
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Anuj Kumar Patel</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experiences</a></li>
                
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
              
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.facebook.com/profile.php?id=100009267236064"} target={"_blank"}><FaFacebook /></a>
                <a href={"https://www.instagram.com/infinity_anuj/"} target={"_blank"}><FiInstagram /></a>
                <a href={"https://twitter.com"} target={"_blank"}><FaTwitter /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer