import { React, useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { Context } from './../../index';


const CreateCake = ({ show, onHide }) => {
    const { cakes } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тортик
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cakes.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите вид</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cakes.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите название тортика'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите стоимость тортика'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                    >Добавить новую характеристику
                    </Button>


                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите название'
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите описание'
                                />
                            </Col>

                            <Col md={4}>
                                <Button
                                    variant='outline-danger'
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить</Button>
                            </Col>

                        </Row>

                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-succes' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCake;