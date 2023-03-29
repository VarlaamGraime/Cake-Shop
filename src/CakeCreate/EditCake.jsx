import React from 'react';
import { Card, Container, Button, Form, Dropdown } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../index'


const EditCake = () => {

    const { layers } = useContext(Context)


    return (

        <Container>
            <Card className='
        mt-5 
        border-secondary 
        bg-light
       '
                style={{ width: 300, height: 350 }}>

                <h5 className='text-center '>Редактироть торт</h5>
                <Form className='mt-2 mx-3 justify-content-between align-items-center '>


                    {/* <Dropdown className=''>
                        <Dropdown.Toggle>Выберите слой</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {layers.layers.map(layer =>
                                <Dropdown.Item key={layer.id} >{layer.name}</Dropdown.Item>
                            )}

                        </Dropdown.Menu>
                        <Button
                            className='mx-2 ml-2'
                            variant='outline-success '

                        >Добавить</Button>

                    </Dropdown> */}



                    {/* <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите крем</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {layers.creams.map(cream =>
                                <Dropdown.Item key={cream.id}>{cream.name}</Dropdown.Item>
                            )}

                        </Dropdown.Menu>
                        <Button className='mx-2 ml-2' variant='outline-success' >Добавить</Button>

                    </Dropdown>

                    <Dropdown className='mt-3   '>
                        <Dropdown.Toggle>Аксессуар</Dropdown.Toggle>
                        <Dropdown.Menu>

                            <Dropdown.Item  > аксессуары...</Dropdown.Item>
                        </Dropdown.Menu>
                        <Button className='mx-2 ml-2' variant='outline-success' >Добавить</Button>

                    </Dropdown> */}
                </Form>

            </Card>
        </Container>
    );
};

export default EditCake;