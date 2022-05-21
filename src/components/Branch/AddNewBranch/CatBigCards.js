import React, { useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CatSmall from './CatSmall';

const CatBigCards = ({ item, index }) => {

    const products = useSelector(state => state.products)
    const [isChecked, setIsChecked] = useState(false);
    const [category_selected, setCategroySelected] = useState({
        "category_list_id": item.category_list_id,
        "product_list_id": []
    })
    const subProducts = () => {

        if (products.data) {
            return products.data.data.map((item, index) => {
                return (
                 <CatSmall item={item} index={index} />
                )
            })
        }
    }
    return (
        <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
            <Card className='bigCardIm' >
                <Card.Img variant="top" src={item.card_img} />
                <Card.Body style={{ height: "400px", overflowY: "hidden" }}>
                    <Card.Title className='mb-2'>
                        {item.category_name}
                        <div className='d-flex mt-3'>
                            <h5 style={{ fontSize: "16px" }} className='w-50'>Product Name</h5>
                            <h5 style={{ fontSize: "16px", textAlign: "end" }} className='w-50'>Items Available</h5>
                        </div></Card.Title>
                    <div>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} style={{ height: "280px", overflowY: "scroll" }} className="mb-4">
                                {subProducts()}
                            </div>
                        ))}

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CatBigCards;