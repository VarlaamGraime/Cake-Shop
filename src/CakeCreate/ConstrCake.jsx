import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CarCake from './CarCake';


const ConstrCake = () => {
    return (
        <Container>
            <Card className='
        justify-content-center 
        mt-5 
        border-secondary 
        bg-light
        padddingBot
       '
                style={{ width: 700, height: 350 }}>
                <CarCake />
            </Card>
        </Container>

    );
};

export default ConstrCake;