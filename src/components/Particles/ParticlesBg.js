import React from 'react';
import pConfig from './particlesjs-config';
import Particles from 'react-particles-js';

const particleOpt = pConfig;

export default function ParticlesBg() {
    return (
        <div>
            <Particles params={particleOpt} />
        </div>
    );
}
