import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const AddAdmin = (props) => {

    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add New Admin</div>
                    <div className='form-body'>
                        <Form onSubmit={props.onNext} className='needs-validation'>
                            <Row>
                                <Col>
                                    {/* <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Mark"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group> */}
                                    <div className="mb-3 p-2 position-relative">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" aria-describedby="emailHelp" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Status</label>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option defaultValue={"Active"}>Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Branches</label>
                                    {props.displayBranch()}
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Gender</label>
                                    <div className='d-flex'>
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Male
                                            </label></div>
                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Employee Role</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>

                            </Row>
                            <div className="p-2"><button type="submit" className='btn btn-primary ' >Next</button></div>

                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddAdmin;