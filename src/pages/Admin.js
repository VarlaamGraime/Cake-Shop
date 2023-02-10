import React from 'react';
import { Button, Container } from 'react-bootstrap';

const admin = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button
                variant='outline-dark'
                className='mt-2'>
                Добавить Тип
            </Button>
            <Button
                variant='outline-dark'
                className='mt-2'>
                Добавить Вид
            </Button>
            <Button
                variant='outline-dark'
                className='mt-2'>
                Добавить Торт
            </Button>

        </Container>
    );
};

export default admin;