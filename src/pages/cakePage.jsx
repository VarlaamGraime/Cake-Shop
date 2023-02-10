import React from 'react';
import { Container, Col, Image, Form, Row, Card, Button } from 'react-bootstrap';
import defaultCake from '../assets/defaultCake.png'
import BigStar from '../assets/BigStar.png'


const cakePage = () => {
    const cake = { id: 1, name: 'Наполеон', price: 1000, rating: 5, img: 'https://ru.pngtree.com/freepng/dessert-cake-gourmet-hand-drawn-elements_5755627.html' }
    const description = [
        { id: 1, title: 'Высота торта', description: '20см' },
        { id: 2, title: 'Вес торта', description: 'от 2кг' },
        { id: 3, title: 'Процент крема', description: '40%' },
        { id: 4, title: 'Наличие фруктов', description: 'нет' },
        { id: 5, title: 'Наличие надписей', description: 'нет' },
        { id: 6, title: 'Форма Торта', description: 'квадратный' }

    ]
    return (
        <Container className='mt-3'>

            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={defaultCake} />
                </Col>


                <Col md={4}>
                    <Form className='d-flex flex-column align-items-center'>
                        <h2>{cake.name}</h2>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ background: `url(${BigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >{cake.rating}</div>
                    </Form>

                </Col>

                <Col md={4}>
                    <Card className=' d-flex flex-column  align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>
                            От: {cake.price} рублей за кг
                        </h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>

            <Row className='d-flex flex-column m-3'>

                <h1>Подробнее...</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 8 }} >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};

export default cakePage;