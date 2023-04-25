import React from 'react';
import { Container, Form, Card, FormControl, Button, } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './../utils/consts';


import { NavLink, useLocation } from 'react-router-dom';
const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >

            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите email'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль'
                    />

                    <Form className='d-flex justify-content-between mt-2'>
                        {isLogin ?
                            <div className='pt-2'>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите</NavLink>

                            </div>
                        }
                        <Button
                            variant="outline-success"
                            className='mt-2 align-self-end'
                        >{isLogin ? 'войти ' : 'регистрация'} </Button>
                    </Form>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
