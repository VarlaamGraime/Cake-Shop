import React from 'react';
import { Card, Container, Image, Button } from 'react-bootstrap';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'


const InfoCake = () => {
    return (
        <Container>
            <Card className='
    d-flex 
    justify-content-column
    mt-5 
    border-secondary 
    bg-light
   '
                style={{ width: 300, height: 350 }}>
                <div className=' mt-4'>
                    <h5 className=' text-center'> Слой нэйм</h5>
                </div>
                <Image width={300} height={50} src={pink} />

                <h6 className=' text-center mt-3'>Информация про слой </h6>
                <Button className='mx-2 mt-5' variant='outline-danger' >Удалить слой</Button>





            </Card>
        </Container>
    );
};

export default InfoCake;