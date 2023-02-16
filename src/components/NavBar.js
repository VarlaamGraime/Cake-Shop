import { React, useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, CONSTR } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';





const NavBar = observer(() => {

    const { user } = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container className=' '>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={SHOP_ROUTE}>ТортЕки</NavLink>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={CONSTR}>Конструктор Тортиков</NavLink>

                {user.isAuth ?

                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                            className='ms-2'>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>


    );
});

export default NavBar;