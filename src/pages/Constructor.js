import React from 'react';
import { Container } from 'react-bootstrap';
import ConstrCake from '../CakeCreate/ConstrCake';
import EditCake from '../CakeCreate/EditCake';
import InfoCake from '../CakeCreate/InfoCake';

const Constructor = () => {
    return (
        <Container className='d-flex  justify-content-between  '>
            <EditCake />
            <ConstrCake />
            <InfoCake />
        </Container>
    );
};

export default Constructor;