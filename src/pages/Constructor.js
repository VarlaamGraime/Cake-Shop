import React from 'react';
import { Container } from 'react-bootstrap';
import ConstrCake from '../CakeCreate/ConstrCake';

const Constructor = () => {
    return (
        <Container className='d-flex  justify-content-between  '>
            <ConstrCake />
        </Container>
    );
};

export default Constructor;