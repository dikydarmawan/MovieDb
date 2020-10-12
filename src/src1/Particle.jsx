import React from 'react';
import './Particle.css';

function Particle() {
    return (
        <div className="glowing">
            <span className="p1"></span>
            <span className="p1"></span> 
            <span style="--i:3;"></span>             
        </div>
    )
}

export default Particle
