import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AddAddons = (props) => {
    const [addon,setAddon]=useState({
      title:"",
      sku:"",
      order:null,
      price:null
    })
    const handleChange=(value)=>(event)=>{
      setAddon({...addon,[value]:event.target.value})
    }
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
      <div className='row d-flex justify-content-center'>
        <div className='form-container'>
          <div className='form-head'>Add New Addons</div>
          <div className='form-body'>
            <form>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={addon.title} onChange={ handleChange("title")} required/>
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Price</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={addon.price}   onChange={ handleChange("price")} required />
                </div></Col>


              </Row>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={addon.sku}  onChange={ handleChange("sku")} required />
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Order</label>
                  <input type="textarea" className="form-control" aria-describedby="emailHelp" value={addon.order} onChange={ handleChange("order")} required />
                </div></Col>
              </Row>
              <div className="p-2"><button className='btn btn-primary ' onClick={props.nextStep} >Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </Container>
    );
};

export default AddAddons;