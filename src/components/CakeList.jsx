import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import CakeItem from './CakeItem';


const CakeList = observer(() => {
    const { cakes } = useContext(Context)


    return (
        <Row className='d-flex'>
            {cakes.cakes.map(cakes =>
                <CakeItem key={cakes.id} cakes={cakes} />
            )}
        </Row>
    );
});

export default CakeList;