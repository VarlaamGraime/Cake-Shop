import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import defaultCake from '../assets/defaultCake.png'
import { useNavigate } from 'react-router-dom'
import { CAKE_ROUTE } from '../utils/consts'


const CakeItem = ({ cakes }) => {
    const navigate = useNavigate()


    return (
        <Col md={3} className='mt-3' onClick={() => navigate(CAKE_ROUTE + '/' + cakes.id)}>
            <Card style={{ width: 150, cursor: ' pointer' }} border={'light'} >
                <Image width={150} height={150} src={defaultCake} />
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>
                        Какой-то торт
                    </div>
                    <div className='mt-1 d-flex align-items-center'>
                        <div>{cakes.rating}</div>
                        <Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>{cakes.name}</div>

            </Card>
        </Col>
    );
};

export default CakeItem;