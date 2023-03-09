import { React, useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import dressing from '../assets/dressing.png'
import dressingPink from '../assets/dressingPink.png'
import dressBanana from '../assets/dressBanana.png'

import './Style/Style.css'
import { Image, Container, Button, Card, Col, Row } from 'react-bootstrap';



const CarCake = () => {

    const [cakeArr, setCakeArr] = useState([])

    const addCakeArr = () => {
        setCakeArr([...cakeArr, {}])
    }

    const removeCake = (number) => {
        setCakeArr(cakeArr.filter(i => i.number !== number))
    }

    const [show, setShow] = useState(false);
    const target = useRef(null);







    return (



        <Container className='d-flex  flex-column justify-content-center align-items-center  '>

            {cakeArr.map(i =>

                <div className='margin-lay '>

                    <Carousel className='p-2 position-relative   zIn margin-dress' variant="dark" indicators={false}  >

                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}>
                            <Image width={300} height={20} src={dressBanana} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={20} src={dressing} />
                        </Carousel.Item>

                    </Carousel>


                    <Carousel

                        className='p-2' variant="dark" indicators={false}  >

                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={50} src={pink} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={50} src={yel} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={50} src={br} />
                        </Carousel.Item>
                    </Carousel>

                </div>
            )
            }
            <Row className='d-flex flex-row' >
                <Col >
                    <Button
                        className='ml-1   '
                        variant={'outline-success'}
                        onClick={addCakeArr}
                    >+ </Button>
                </Col>
                <Col  >

                    <Button
                        className='ml-1 '

                        variant='outline-danger'
                        onClick={() => removeCake()}
                    >
                        -</Button>
                </Col>


            </Row>
            <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                ...
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                    <div
                        className='margin-tool '
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(248, 249, 250, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            width: 300,
                            height: 350,
                        }}
                    >
                        Simple tooltip
                    </div>
                )}
            </Overlay>

        </Container>

    );
}



export default CarCake;