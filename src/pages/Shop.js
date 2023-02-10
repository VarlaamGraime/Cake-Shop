import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import CakeList from '../components/CakeList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>

                <Col md={9}>
                    <BrandBar />
                    <CakeList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;