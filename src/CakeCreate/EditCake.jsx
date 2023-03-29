import React, { Component } from "react";
import { useContext, useState } from 'react';
import { Context } from '../index'
import Slider from "react-slick";


import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import './Style/Style.css'
import { Image, Container, Button, Card, Col, Row, Overlay, Dropdown, Form } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

                <Form className='mt-2 mx-3 justify-content-between align-items-center '>




                </Form>

            </Card>
        </Container>
    );
};

export default EditCake;