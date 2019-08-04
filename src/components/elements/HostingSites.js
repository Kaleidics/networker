import React from 'react';
import apple from '../../assets/apple.png';
import spotify from '../../assets/spotify.png';
import google from '../../assets/google.png';
import playstore from '../../assets/playstore.png';
import anchor from '../../assets/anchor.jpg';

export default function HostingSites() {
    return (
        <ul className="imagelist">
            <li><a href="https://www.google.com/"><img className="imagelist__images" style={{ animationDelay: ".1s" }} src={apple} alt="apple podcast"></img></a></li>
            <li><a href="https://www.google.com/"><img className="imagelist__images" style={{ animationDelay: ".2s" }} src={spotify} alt="spotify"></img></a></li>
            <li><a href="https://www.google.com/"><img className="imagelist__images" style={{ animationDelay: ".3s" }} src={google} alt="google podcast"></img></a></li>
            <li><a href="https://www.google.com/"><img className="imagelist__images" style={{ animationDelay: ".4s" }} src={playstore} alt="google playstore"></img></a></li>
            <li><a href="https://www.google.com/"><img className="imagelist__images" style={{ animationDelay: ".5s" }} src={anchor} alt="anchor"></img></a></li>
        </ul>
    );
}