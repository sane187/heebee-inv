import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const AddCatToBranch = (props) => {

    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add Product To Categories</div>
                    <div className='form-body'>
                        <form >
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Category Name</Card.Title>
                                            <div>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className="mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default-${type}`}
                                                            label={`Sandwich`}
                                                        />

                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Burger`}
                                                        />
                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Pizza`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Category Name</Card.Title>
                                            <div>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className="mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default-${type}`}
                                                            label={`Sandwich`}
                                                        />
 
                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Burger`}
                                                        />
                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Pizza`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Category Name</Card.Title>
                                            <div>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className="mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default-${type}`}
                                                            label={`Sandwich`}
                                                        />

                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Burger`}
                                                        />
                                                        <Form.Check
                                                            type={type}
                                                            label={`Burger`}
                                                            id={`Pizza`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col> <div className="mb-2 p-2">
                                    <button className='btn btn-primary me-2  ' onClick={() => props.setStep(1)} >Back</button>
                                    <button className='btn btn-primary me-2  '  >Submit</button>
                                </div></Col>

                            </Row>

                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddCatToBranch;