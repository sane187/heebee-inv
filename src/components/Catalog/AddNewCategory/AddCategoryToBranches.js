import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const AddCategoryToBranches = (props) => {

    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add Category To Branches</div>
                    <div className='form-body'>
                        <form >
                            <Row>
                                <Col> <div className="mb-2 p-2" >
                                    <label className="form-label">Select Categories(S)</label>
                                    {props.displayCategory()}
                                </div></Col>
                               
                            </Row>
                            <Row>
                                <Col> <div className="mb-2 p-2">
                                <button className='btn btn-primary me-2  ' onClick={()=>props.setStep(1)} >Back</button>
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

export default AddCategoryToBranches;