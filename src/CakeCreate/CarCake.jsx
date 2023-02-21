import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import { Image, Container } from 'react-bootstrap';





const CarCake = () => {
    return (

        <Container className='d-flex justify-content-center align-items-center  '>
            <Carousel variant="dark" indicators={false}  >

                <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >

                    <Image width={300} height={50} src={pink} />

                </Carousel.Item>

                <Carousel.Item interval={99999999}>
                    <Image width={300} height={50} src={br} />

                </Carousel.Item>
                <Carousel.Item interval={99999999}>
                    <Image width={300} height={50} src={yel} />
                </Carousel.Item>


            </Carousel>



        </Container>

    );
}



export default CarCake;