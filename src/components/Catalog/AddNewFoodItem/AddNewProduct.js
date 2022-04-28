import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
const AddNewProduct = (props) => {

  return (
    <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
      <div className='row d-flex justify-content-center'>
        <div className='form-container'>
          <div className='form-head'>Add New Food Item</div>
          <div className='form-body'>
            <form>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Product Name</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={props.Newproduct.product_name} onChange={ props.handleChange("product_name")} required/>
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={props.Newproduct.sku}   onChange={ props.handleChange("sku")} required />
                </div></Col>


              </Row>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Items Available</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={props.Newproduct.items_available}  onChange={ props.handleChange("items_available")} required />
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Description</label>
                  <input type="textarea" className="form-control" aria-describedby="emailHelp" value={props.Newproduct.description} onChange={ props.handleChange("description")} required />
                </div></Col>


              </Row>

              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">product Type</label>
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"   required>
                    <option defaultChecked value="Kitchen" onChange={ props.handleChange("product_type")}>Kitchen</option>
                    <option value="Barista" onChange={ props.handleChange("product_type")}>Barista</option>
                  </select>
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Price</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" required  onChange={ props.handleChange("price")} />
                </div></Col>

              </Row>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Billing Address</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp"  onChange={ props.handleChange("billing_address")} required />
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Shipping Address</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp"  onChange={ props.handleChange("shipping_address")} required />
                </div></Col>

              </Row>
              <Row>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label d-block">Image Upload</label>
                  <input className="d-block" type="file" id="NewCategoryImage" name="img" accept="image/*" onChange={props.imageUpload} required />
                  {props.uploadedImage && <img className="mt-2" src={props.preview} style={{ width: "200px", maxHeight: "200px" }} />}
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Status</label>
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required>
                    <option defaultChecked value="Active"  onChange={ props.handleChange("status")}>Active</option>
                    <option value="Inactive" onChange={ props.handleChange("status")}>Inactive</option>
                  </select>
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Branch</label>
                  {props.displayBranch()}
                </div></Col>
                <Col> <div className="mb-3 p-2">
                  <label className="form-label">Food Type</label>
                  <div className='d-flex'>
                    <div className="form-check me-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Veg"} onChange={props.handleChange("food_type")} id="flexRadioDefault1" defaultChecked required />
                      <label className="form-check-label" htmlFor="flexRadioDefault1" >
                        Veg
                      </label></div>
                    <div className="form-check ">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Non-Veg"} onChange={ props.handleChange("food_type")} id="flexRadioDefault2" required />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Non Veg
                      </label>
                    </div>
                  </div>
                </div></Col>

              </Row>
              <div className="p-2"><button className='btn btn-primary  ' onClick={props.nextStep} >Next</button></div>

            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddNewProduct;