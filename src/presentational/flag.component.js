import React from 'react';
import '../index.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
    </div>
);

export default CountryFlag;