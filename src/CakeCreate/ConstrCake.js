import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CarCake from './CarCake';
import FinishCake from './FinishCake';


const ConstrCake = () => {
    return (
        <Container className='flexCont'>
            <Card className='
        justify-content-center 
        mt-5 
        border-secondary 
        bg-light
        padddingBot
       '
                style={{ width: 350, height: 350 }}>
                <CarCake />
                
                
            </Card>

            <Card className='
        justify-content-center 
        mt-5 
        border-secondary 
        bg-light
        padddingBot
        cardPad
       '
                style={{ width: 350, height: 350 }}>
                <FinishCake/>
                
            </Card>
        </Container>

    );
};

export default ConstrCake;