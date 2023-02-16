import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'




const CarCake = () => {
    return (
        <Carousel className='mt-5'>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="pink"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Первый</h2>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="yel"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>Второй</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="br"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Третий</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}



export default CarCake;