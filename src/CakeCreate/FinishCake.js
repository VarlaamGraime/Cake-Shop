import React from 'react';
import style from './Style/FinishCake.css'
import { Card } from 'react-bootstrap';

const FinishCake = () => {
    return (
        <div>
            <div className='divTextHead' >
                <h6 className='textHead'>Внешний вид торта</h6>
                <div className='divCards'>
                    <Card
                    className='cardStyle'
                        style={{ width: 60, height: 60 }}>
                       <div className=''></div>
                    </Card>
                    <Card
                    className='cardStyle'
                        style={{ width: 60, height: 60 }}>
                       <div className=''></div>
                        
                    </Card>
                    <Card
                    className='cardStyle'
                        style={{ width: 60, height: 60 }}>
                       <div className=''></div>
                        
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FinishCake;