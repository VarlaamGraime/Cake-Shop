import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image, Container } from 'react-bootstrap';
import dressing from '../assets/dressing.png'
import dressingPink from '../assets/dressingPink.png'


const CarDressCake = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center z-3 px-2   '  >
            <Carousel variant="dark" indicators={false} >

                <Carousel.Item interval={99999999}   >

                    <Image width={300} height={20} src={dressing} />

                </Carousel.Item>

                <Carousel.Item interval={99999999}>
                    <Image width={300} height={20} src={dressingPink} />

                </Carousel.Item>



            </Carousel>
        </Container>
    );
};

export default CarDressCake;