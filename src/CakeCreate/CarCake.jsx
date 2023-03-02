import { React, useState } from 'react';
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


    const removeCake2 = (number) => {
        setCakeArr(cakeArr.pop())
    }








    return (



        <Container className='d-flex  flex-column justify-content-center align-items-center  '>

            {cakeArr.map(i =>

                <div className='margin-lay '>

                    <Carousel className=' carousel-fade  p-2 position-relative   zIn margin-dress' variant="dark" indicators={false}  >

                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={20} src={dressBanana} />
                        </Carousel.Item>
                        <Carousel.Item interval={99999999} style={{ cursor: ' pointer' }}  >
                            <Image width={300} height={20} src={dressing} />
                        </Carousel.Item>

                    </Carousel>


                    <Carousel className='   p-2' variant="dark" indicators={false}  >

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
            <Row className='d-flex flex-row   ' >
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
        </Container >

    );
}



export default CarCake;