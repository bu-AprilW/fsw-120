import React from 'react';

const Services = () => {
    return (
        <div>
            <nav className="servicesNav">
                <h1>Services Page</h1>
            </nav>
            <div className="container">
                <h1 className="servicesHeader">Services we offer: </h1>
                <ul className="mx-auto tb li-mt-1">
                    <li>Faucet Repair</li>
                    <li>Garbage Disposal Repair</li>
                    <li>Hydronic Heating Repair</li>
                    <li>Shower Repair</li>
                    <li>Sink Repair</li>
                    <li>Tub Repair</li>
                    <li>Water Softener Repair</li>
                </ul>
            </div>
        </div>
    );
}

export default Services;