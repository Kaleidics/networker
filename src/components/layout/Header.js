import React from 'react';
import AudioCard from "audiocard";

import ParticlesBg from '../Particles/ParticlesBg';
import config1 from '../Particles/particlesjs-config';
import config2 from '../Particles/Particlesjs-config2';

export default class Header extends React.Component {
    render() {

        let latestPodcast = this.props.latestPodcast[0] ? <AudioCard title={this.props.latestPodcast[0].title} source={this.props.latestPodcast[0].enclosure.url} color="#fdb927" background="transparent" /> : "";
        return (
            <header className="header">
                <div className="header__container">
                    <ParticlesBg particleOptions={config1} />
                </div>
                <div className="header__clipper">
                    <ParticlesBg particleOptions={config2} />
                </div>
                <div className="header__shadow" />
                <div className="header__content">
                    <div className="header__main">
                        <h1 className="heading-primary">the netwrkr podcast</h1>
                    </div>
                    <div className="header__latest-podcast">{latestPodcast}</div>
                </div>
            </header>
        );
    }
}