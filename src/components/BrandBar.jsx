import { React, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Card, Form, Row } from 'react-bootstrap';


const BrandBar = observer(() => {
    const { cakes } = useContext(Context)

    return (
        <Form className='d-flex flex-wrap'>
            {cakes.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    className="p-3"
                    onClick={() => cakes.setSelectedBrand(brand)}
                    border={brand.id === cakes.selectedBrand.id ? 'danger' : 'light'}

                    key={brand.id}
                >
                    {brand.name}
                </Card>

            )}


        </Form>
    );
});

export default BrandBar;