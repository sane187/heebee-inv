import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import IndividualCustomer from "./individualCustomers";
import AllCustomer from "./Allcustomer";
import CustomerDashboard from "./customerDashboard";
import faker from "@faker-js/faker";
import AddCustomer from "./AddCustomer";
class Customer extends React.Component{
    constructor(props){
        super(props);
        const fakeData = () => {
            let array = [];
            for (let index = 0; index < 10; index++) {
              const element = { "id": `${faker.datatype.uuid()}`, "name": `${faker.name.findName()}`,"address":`${faker.address.streetAddress()} ${faker.address.cityName()}`, "email": `${faker.internet.email()}`, "telephone": `${faker.phone.phoneNumber()}`, "zip": `${faker.address.zipCode()}`, "city": `${faker.address.city()}`, "franchise": `${faker.address.streetAddress()}`, "order date": `${String(faker.date.recent()).slice(0,-30)}`,"gender":`${faker.name.gender(true)}` }
              array.push(element);
            }
            return array;
          }
          const products = fakeData();
        this.state = {
            products: products,
            currentCustomer:products[0]
          }
    }
    setCustomer=(customer)=>{
        this.setState({currentCustomer: customer});
    }
    render(){
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<CustomerDashboard products={this.state.products} sideToggle={this.props.sideToggle} currentCustomer={this.state.currentCustomer} setCustomer={this.setCustomer} />} />
                <Route path="/individual" element={<IndividualCustomer products={this.state.products}  sideToggle={this.props.sideToggle}  currentCustomer={this.state.currentCustomer} />} />
                <Route path="/addCustomer" element={<AddCustomer products={this.state.products}  sideToggle={this.props.sideToggle}  currentCustomer={this.state.currentCustomer} />} />
                <Route path='/allCustomer' element={<AllCustomer products={this.state.products}  sideToggle={this.props.sideToggle}  currentCustomer={this.state.currentCustomer} setCustomer={this.setCustomer} />}></Route>
            </Routes>
        </React.Fragment>)
        
    }
       

    
}
export default Customer;