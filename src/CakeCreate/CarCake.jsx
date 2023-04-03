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

    const [createdCake, setCreatedCake] = useState([])

    const items = [
        { id: 200, },
        { id: 201, },
        { id: 202, },
        { id: 203, },
        { id: 204, },
        { id: 205, },
        { id: 206, },
        { id: 207, },
        { id: 208, },
        { id: 209, },
        { id: 210, },


    ];


    const addCakeArr = () => {
        setCakeArr([...cakeArr, { nameLay: 'Ягода', nameCr: 'Ваниль', id: Date.now() }])
    }

    const removeCake = (id) => {
        setCakeArr([...cakeArr.slice(0, cakeArr.length - 1)]);
    }


    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [showCr, setShowCr] = useState(false);
    const target2 = useRef(null);

    const [currentLay, setCurrentLay] = useState([])

    const [currentCr, setCurrentCr] = useState([])


    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);

        if (selectedIndex === 0) {
            console.log('ягода')
            cakeArr[0].nameLay = 'Ягода'
        }
        else if (selectedIndex === 1) {
            console.log('банан')
            cakeArr[0].nameLay = 'банан'

        }
        else {
            console.log('сдоба')
            cakeArr[0].nameLay = 'сдоба'

        }



    }








    const addCurrentLayBan = () => {
        setCurrentLay([...currentLay, { nameLay: 'Банан', id: Date.now(), img: yel, descr: 'Нежнейший банановый слой, сделанный по исконным рецептам и прочее прочее прочее, еще немного текста для объёма, чтобы было понятно и наглядно, иначе нереалистично ' }])
    }
    const addCurrentLayBer = () => {
        setCurrentLay([...currentLay, { nameLay: 'Ягода', id: Date.now(), img: pink, descr: 'Нежнейший ягодный слой, сделанный по исконным рецептам и прочее прочее прочее, еще немного текста для объёма, чтобы было понятно и наглядно, иначе нереалистично ' }])
    }
    const addCurrentLayMaf = () => {
        setCurrentLay([...currentLay, { nameLay: 'Сдоба', id: Date.now(), img: br, descr: 'Нежнейший сдобный слой, сделанный по исконным рецептам и прочее прочее прочее, еще немного текста для объёма, чтобы было понятно и наглядно, иначе нереалистично ' }])
    }



    const addCurrentCrVan = () => {
        setCurrentCr([...currentCr, { nameCr: 'Ваниль', id: Date.now(), img: dressBanana, descr: 'Сочная ванильная начинка, сделанная по исконным рецептам и прочее прочее прочее, еще немного текста для объёма, чтобы было понятно и наглядно, иначе нереалистично ' }])
    }
    const addCurrentCrCar = () => {
        setCurrentCr([...currentCr, { nameCr: 'Карамель', id: Date.now(), img: dressing, descr: 'Сочная карамельная начинка, сделанная по исконным рецептам и прочее прочее прочее, еще немного текста для объёма, чтобы было понятно и наглядно, иначе нереалистично ' }])
    }


    useEffect((selectedIndex) => {

        if (currentLay.length > 1) {
            setCurrentLay(currentLay.slice(1))
        }

        if (currentCr.length > 1) {
            setCurrentCr(currentCr.slice(1))
        }
        console.log(`-------------`)
        console.log(currentLay, ' массив с выбранным слоем')
        console.log(currentCr, ' массив с выбранной прослойкой')
        console.log(cakeArr, ' массив всего торта')

        console.log(`-------------`)




    });



    return (






        <Container className='d-flex  flex-column justify-content-center align-items-center'>



            {cakeArr.map(i =>

                <div className='margin-lay'>
                    <Carousel className='p-2 position-relative zIn margin-dress  ' variant="dark" indicators={false}  >

                        <Carousel.Item interval={99999999} style={{ cursor: 'pointer' }}
                            onClick={() => { setShowCr(!showCr); addCurrentCrVan(); setShow(false) }}
                            ref={target}
                        >
                            <Image width={300} height={20} src={dressBanana} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => { setShowCr(!showCr); addCurrentCrCar(); setShow(false) }}
                            ref={target2}

                        >
                            <Image width={300} height={20} src={dressing} />
                        </Carousel.Item>

                    </Carousel>


                    <Carousel
                        key={123123}
                        onSelect={handleSelect}
                        className='p-2  ' variant="dark" indicators={false}  >


                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayBer(); setShowCr(false); }}
                            ref={target}

                        >

                            <Image width={300} height={50} src={pink} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayBan(); setShowCr(false); }}
                            ref={target}
                        >
                            <Image width={300} height={50} src={yel} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayMaf(); setShowCr(false); }}
                            ref={target}
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
                                {currentLay.filter(layer =>
                                    (layer.nameLay === 'Ягода')
                                    || (layer.nameLay === 'Банан')
                                    || (layer.nameLay === 'Сдоба')
                                ).map(filteredLayer => (
                                    <div>
                                        <h5 className=' text-center' style={{ color: 'black', fontSize: '24px' }}>{filteredLayer.nameLay}</h5>
                                        <Image width={300} height={50} src={filteredLayer.img} />

                                        <h6 className='mt-3 textInfo'  >{filteredLayer.descr} </h6>

                                    </div>
                                ))
                                }
                            </h5>
                        </div>




                        <Dropdown className=''>
                            <Dropdown.Toggle>Изменить слой</Dropdown.Toggle>
                            <Dropdown.Menu style={{ margin: 0 }}>
                                {layers.layers.map(layer =>
                                    <Dropdown.Item key={layer.id}
                                    >{layer.name}</Dropdown.Item>
                                )}
                                <Button className='mx-2 mt-2' variant='outline-danger' onClick={removeCake} >Удалить  </Button>

                            </Dropdown.Menu>
                        </Dropdown>


                    </div>
                )
                }
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

                        {/* <div className=' mt-4'>
                            <h5 className='text-center' style={{ color: 'black' }}> Крем нэйм</h5>
                        </div>
                        <Image width={300} height={50} src={dressBanana} />
                        <h6 className=' text-center mt-3' style={{ color: 'black' }} >Описание </h6> */}



                        <h5 className=' text-center' style={{ color: 'black' }}>
                            {currentCr.filter(Cream =>
                                (Cream.nameCr === 'Ваниль')
                                || (Cream.nameCr === 'Карамель')
                            ).map(filteredCream => (
                                <div>
                                    <h5 className=' text-center' style={{ color: 'black', fontSize: '24px' }}>{filteredCream.nameCr}</h5>
                                    <Image width={300} height={50} src={filteredCream.img} />

                                    <h6 className='mt-3 textInfo'  >{filteredCream.descr} </h6>

                                </div>
                            ))
                            }
                        </h5>


                        <Dropdown className='mt-3'>
                            <Dropdown.Toggle>Изменить крем</Dropdown.Toggle>
                            <Dropdown.Menu style={{ margin: 0 }}>
                                {layers.creams.map(cream =>
                                    <Dropdown.Item key={cream.id}>{cream.name}</Dropdown.Item>
                                )}
                                <Button className='mx-2 mt-2' variant='outline-danger' >Удалить слой</Button>

                            </Dropdown.Menu>
                        </Dropdown>


                    </div>
                )}
            </Overlay>

            <div className='succes_but_div'>


                <button
                    className='Butt_succes'
                >Собрать торт</button>
            </div>

        </Container >


    );
}



export default CarCake;