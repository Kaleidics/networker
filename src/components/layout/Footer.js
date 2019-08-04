import React from 'react';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.google.com/">
                <img className="footer__social" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.google.com/">
                <img className="footer__social" src={facebook} alt="facebook" />
            </a>
            <a href="https://www.google.com/">
                <img className="footer__social" src={instagram} alt="instagram" />
            </a>
        </footer>
    );
}