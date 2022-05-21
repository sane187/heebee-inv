import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SmallCard from './SmallCard';


const BigCard = ({item,index}) => {
    const SmallCard1 = (i, index) => {
   
        return i.products.map((item, index) => {
            return (
               <SmallCard key={index} item={item}  />
            )
        })
    
}
return (
    <Col xxl={12} className="mb-4">
    <Card style={{ width: '100%' }}>
        <Card.Body>
            <Card.Title className='mb-3' style={{ backgroundColor: "#fff", color: "grey", fontWeight: "800" }}>{}</Card.Title>
            <Card.Text>
                <Row>
                    {SmallCard1(item, index)}
                </Row>
            </Card.Text>

        </Card.Body>
    </Card>
</Col>
);
};

export default BigCard;