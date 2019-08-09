import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesBg(props) {
    return (
        <div className="overlay">
            <Particles params={props.particleOptions} />
        </div>
    );
}
