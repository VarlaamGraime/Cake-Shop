import { React, useState, useRef, useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import dressing from '../assets/dressing.png'
import dressBanana from '../assets/dressBanana.png'
import { Context } from '../index'

import './Style/Style.css'
import { Image, Container, Button, Card, Col, Row, Overlay, Dropdown, Form } from 'react-bootstrap';



const CarCake = () => {


    const { layers } = useContext(Context)

    const [cakeArr, setCakeArr] = useState([])


    const addCakeArr = () => {
        setCakeArr([...cakeArr, { nameLay: '', id: Date.now() }])
    }


    const removeCake = (id) => {
        setCakeArr([...cakeArr.slice(0, cakeArr.length - 1)]);
    }

    // console.log(cakeArr)

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [showCr, setShowCr] = useState(false);
    const target2 = useRef(null);

    const [currentLay, setCurrentLay] = useState([])





    const addCurrentLayBan = () => {
        setCurrentLay([...currentLay, { nameLay: 'Банан', id: Date.now() }])
    }
    const addCurrentLayBer = () => {
        setCurrentLay([...currentLay, { nameLay: 'Ягода', id: Date.now() }])
    }
    const addCurrentLayMaf = () => {
        setCurrentLay([...currentLay, { nameLay: 'Сдоба', id: Date.now() }])
    }




    useEffect(() => {

        if (currentLay.length > 1) {
            setCurrentLay(currentLay.slice(1))
        }

        console.log(currentLay)



    });



    return (






        <Container className='d-flex  flex-column justify-content-center align-items-center'>

            {cakeArr.map(i =>

                <div className='margin-lay'>

                    <Carousel className='p-2 position-relative   zIn margin-dress' variant="dark" indicators={false}  >

                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => setShowCr(!showCr)}
                            ref={target}
                            key={11}


                        >
                            <Image width={300} height={20} src={dressBanana} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => setShowCr(!showCr)}
                            ref={target2}
                            key={12}

                        >
                            <Image width={300} height={20} src={dressing} />
                        </Carousel.Item>

                    </Carousel>


                    <Carousel
                        className='p-2' variant="dark" indicators={false}  >
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayBer(); }}

                            ref={target}
                            key={1}
                        >
                            <Image width={300} height={50} src={pink} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={addCurrentLayBan}
                            ref={target}
                            key={2}

                        >
                            <Image width={300} height={50} src={yel} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={addCurrentLayMaf}
                            ref={target}
                            key={3}

                        >
                            <Image width={300} height={50} src={br} />
                        </Carousel.Item>
                    </Carousel>

                </div>
            )
            }
            <Row className='d-flex flex-row' >
                <Col>
                    <Button
                        className='ml-1   '
                        variant={'outline-success'}
                        onClick={addCakeArr}

                    >+ </Button>
                </Col>
                <Col>

                    <Button
                        className='ml-1 '
                        variant='outline-danger'
                        onClick={removeCake}
                    >
                        -</Button>
                </Col>


            </Row>

            <Overlay target={target2.current} show={show} placement="right">
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


                        <div className=' mt-4'>
                            <h5 className=' text-center' style={{ color: 'black' }}>
                                {layers.layers.map(layer =>
                                    <h5 className=' text-center' style={{ color: 'black', fontSize: '14px' }}>{layer.name}</h5>
                                )}
                            </h5>
                        </div>

                        {/* {layers.creams.map(cream =>
                                <h5 className=' text-center' style={{ color: 'black', fontSize: '14px' }}>{cream.name}</h5>
                            )} */}

                        <Image width={300} height={50} src={pink} />
                        <h6 className=' text-center mt-3' style={{ color: 'black' }} >Описание </h6>

                        <Dropdown className=''>
                            <Dropdown.Toggle>Выберите слой</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {layers.layers.map(layer =>
                                    <Dropdown.Item key={layer.id} >{layer.name}</Dropdown.Item>
                                )}

                            </Dropdown.Menu>
                            <Button className='rightBox ' variant='outline-danger' onClick={removeCake} >Удалить  </Button>


                        </Dropdown>


                    </div>
                )}
            </Overlay>

            <Overlay target2={target2.current} show={showCr} placement="right">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _showCr,
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

                        <div className=' mt-4'>
                            <h5 className='text-center' style={{ color: 'black' }}> Крем нэйм</h5>
                        </div>
                        <Image width={300} height={50} src={dressBanana} />
                        <h6 className=' text-center mt-3' style={{ color: 'black' }} >Описание </h6>


                        <Dropdown className='mt-3'>
                            <Dropdown.Toggle>Выберите крем</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {layers.creams.map(cream =>
                                    <Dropdown.Item key={cream.id}>{cream.name}</Dropdown.Item>
                                )}

                            </Dropdown.Menu>
                            <Button className='mx-2 ml-2' variant='outline-success' >Изменить</Button>

                        </Dropdown>

                        <Button className='mx-2 mt-5' variant='outline-danger' >Удалить крем</Button>
                    </div>
                )}
            </Overlay>


        </Container>


    );
}



export default CarCake;