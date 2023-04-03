import React, { useState } from 'react';
import { Card, Container, Image, Button } from 'react-bootstrap';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import Carousel from 'react-bootstrap/Carousel';

const InfoCake = () => {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const handleSelect1 = (selectedIndex) => {
        setActiveIndex1(selectedIndex);
        console.log('1')
    };

    const handleSelect2 = (selectedIndex) => {
        setActiveIndex2(selectedIndex);
        console.log('1')

    };

    const handleSelect3 = (selectedIndex) => {
        setActiveIndex3(selectedIndex);
        console.log('1')

    };

    const carousels = [
        {
            id: 1,
            onSelect: handleSelect1,
            items: [
                <Carousel.Item key={1}>Item 1A</Carousel.Item>,
                <Carousel.Item key={2}>Item 1B</Carousel.Item>,
                <Carousel.Item key={3}>Item 1C</Carousel.Item>,
            ]
        },
        {
            id: 2,
            onSelect: handleSelect2,
            items: [
                <Carousel.Item key={1}>Item 2A</Carousel.Item>,
                <Carousel.Item key={2}>Item 2B</Carousel.Item>,
                <Carousel.Item key={3}>Item 2C</Carousel.Item>,
            ]
        },
        {
            id: 3,
            onSelect: handleSelect3,
            items: [
                <Carousel.Item key={1}>Item 3A</Carousel.Item>,
                <Carousel.Item key={2}>Item 3B</Carousel.Item>,
                <Carousel.Item key={3}>Item 3C</Carousel.Item>,
            ]
        }
    ];

    return (
        <Container>
            <div>
                {/* {carousels.map((carousel) => (
                    <Carousel
                        key={carousel.id}
                        activeIndex={carousel.id === 1 ? activeIndex1 : carousel.id === 2 ? activeIndex2 : activeIndex3}
                        onSelect={carousel.onSelect}
                    >
                        {carousel.items}
                    </Carousel>
                ))} */}
            </div>

        </Container>
    );
};

export default InfoCake;