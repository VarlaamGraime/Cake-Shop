import { React, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';


const TypeBar = observer(() => {
    const { cakes } = useContext(Context)

    return (
        <ListGroup className='mt-2'>

            {cakes.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === cakes.selectedType.id}
                    onClick={() => cakes.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;