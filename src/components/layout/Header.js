import React from 'react';
import hero from '../../assets/logo.png';
import ParticlesBg from '../Particles/ParticlesBg';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <img className="header__image" src={hero} alt="netwrkr" />
                    <ParticlesBg />
                </div>
                <div className="header__main">
                    <h1 className="heading-primary">the netwrkr podcast</h1>
                    <p className="paragraph">The podcast all about <span className="u-emphasize">networking</span> and <span className="u-emphasize">networking.</span> Hosted by <span className="u-emphasize">Julian Abeleda.</span></p>
                </div>
            </header>
        )
    }
}