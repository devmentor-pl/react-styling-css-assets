// ./src/components/Box.js
import React from 'react';
import Row from './Row';

import Logo from './../images/logo.png';

const Box = () => {
    return (
        <>
            <h1><img src={ Logo } alt="" />devmentor.pl</h1>
            <p>Ucze się <em>efektywnie</em> pod okiem Mentora!</p>
            <Row type="dark" />
            <Row space="medium"/>
        </>
    );
}

export default Box;