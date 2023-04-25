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

    const [countCake, setCountCake] = useState(-1)

    const [priceCake, setPriceCake] = useState(0)

    function incrementLay() {
        setCountCake(countCake + 1)
    }
    function decrementLay() {
        setCountCake(countCake - 1)
    }


    const changeLay = (selectedIndex) => {
        setActiveIndex(selectedIndex);
        if (selectedIndex === 0) {
            cakeArr[countCake].nameLay = 'Ягода'
        }
        else if (selectedIndex === 1) {
            cakeArr[countCake].nameLay = 'банан'
        }
        else {
            cakeArr[countCake].nameLay = 'сдоба'
        }

    }

    const changeCream = (selectedIndex) => {
        setActiveIndex(selectedIndex);
        if (selectedIndex === 0) {
            cakeArr[countCake].nameCr = 'Ваниль'
        }
        else {
            cakeArr[countCake].nameCr = 'Карамель'
        }

    }
    const [activeIndex, setActiveIndex] = useState(0);
 
 




    const addCakeArr = () => {
        setCakeArr([...cakeArr, { nameLay: 'Ягода', nameCr: 'Ваниль', id: Date.now()}])
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

    function priceForCake() {
        setPriceCake(0)
        cakeArr.forEach(obj => {
            console.log(` слой со вкусом ${obj.nameLay}, начинка  ${obj.nameCr}`);
            if (obj.nameLay === 'Ягода') {
                setPriceCake(prevPrice => prevPrice + 300);
            
            }
            else if (obj.nameLay === 'банан') {
                setPriceCake(prevPrice => prevPrice + 200);
            
            }
            else if (obj.nameLay === 'сдоба') {
                setPriceCake(prevPrice => prevPrice + 100);
            
            }
        })
    }


    useEffect(() => {

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

    

    } );



    return (






        <Container className='d-flex   flex-column  align-items-end'>
            <h6 className='textCenter'>Конструктор слоёв</h6>



            {cakeArr.map((carousel) =>
                <div className='margin-lay'>
                    
                    <Carousel
                        className='p-2 position-relative zIn margin-dress  '
                        variant="dark"
                        indicators={false}
                        onSelect={changeCream}

                    >

                        <Carousel.Item
                            interval={99999999}
                            style={{ cursor: 'pointer' }}
                            onClick={() => { setShowCr(!showCr); addCurrentCrVan(); setShow(false) }}
                            ref={target}
                        >
                            <Image width={300} height={20} src={dressBanana} />
                        </Carousel.Item>


                        <Carousel.Item
                            interval={99999999}
                            style={{ cursor: ' pointer' }}
                            onClick={() => { setShowCr(!showCr); addCurrentCrCar(); setShow(false) }}
                            ref={target2}

                        >
                            <Image width={300} height={20} src={dressing} />
                        </Carousel.Item>

                    </Carousel>



                    <Carousel
                        key={carousel.id}
                        className='p-2 '
                        variant="dark"
                        indicators={false}
                        onSelect={changeLay}
                    >
                        <Carousel.Item
                            interval={99999999}
                            style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayBer(); setShowCr(false) }}
                            ref={target}
                        >
                            <Image width={300} height={50} src={pink} />
                        </Carousel.Item>

                        <Carousel.Item
                            interval={99999999}
                            style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayBan(); setShowCr(false); }}
                            ref={target}
                        >
                            <Image width={300} height={50} src={yel} />
                        </Carousel.Item>

                        <Carousel.Item
                            interval={99999999}
                            style={{ cursor: ' pointer' }}
                            onClick={() => { setShow(!show); addCurrentLayMaf(); setShowCr(false); }}
                            ref={target}
                        >
                            <Image width={300} height={50} src={br} />
                        </Carousel.Item>
                    </Carousel>
 
                </div>


            )
            }
            <div className='paddButPlusMin'>
                <Row className='d-flex flex-row' >
                    <Col>
                        <Button
                            className='ml-1   '
                            variant={'outline-success'}
                            onClick={() => { addCakeArr(); incrementLay() }}
                        >+</Button>
                    </Col>
                    <Col>

                        <Button
                            className='ml-1 '
                            variant='outline-danger'
                            onClick={() => { removeCake();  decrementLay() }}
                        >
                            -</Button>
                    </Col>
                </Row>
            </div>
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

                    </div>
                )}
            </Overlay>

            <div className='succes_but_div'>


                <button
                    className='Butt_succes'
                    onClick={priceForCake}
                >Собрать торт {priceCake} </button>
            </div>


        </Container>


    );
}



export default CarCake;