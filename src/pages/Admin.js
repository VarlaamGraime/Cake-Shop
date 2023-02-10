


import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateCake from '../components/Modals/CreateCake';
import CreateType from '../components/Modals/CreateType';


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [cakeVisible, setCakeVisible] = useState(false)



    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className='mt-2'
                onClick={() => setTypeVisible(true)}>
                Добавить Тип
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-2'
                onClick={() => setBrandVisible(true)}>
                Добавить Вид
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-2'
                onClick={() => setCakeVisible(true)}>
                Добавить Торт
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateCake show={cakeVisible} onHide={() => setCakeVisible(false)} />

        </Container>
    );
};

export default Admin;