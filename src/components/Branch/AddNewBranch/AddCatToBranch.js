import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CatBigCards from './CatBigCards';

const AddCatToBranch = (props) => {
     const products=useSelector(state=>state.products)
     const categories=useSelector(state=>state.categories)
     
     const BigCard=()=>{
         if(categories.data){
            return categories.data.data.map((item,index)=>{
                return <CatBigCards item={item} index={index}/>
             })
         }
     }
     
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add Categories and Products</div>
                    <div className='form-body'>
                        <form >
                            <Row>
                            {BigCard()}
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