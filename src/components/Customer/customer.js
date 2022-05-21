import React from "react";
import { useState, useEffect } from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import IndividualCustomer from "./individualCustomers";
import AllCustomer from "./Allcustomer";
import CustomerDashboard from "./customerDashboard";
import faker from "@faker-js/faker";
import AddCustomer from "./AddCustomer";
import { useDispatch, useSelector } from "react-redux";
import { clearDashBoard } from "../../store/actionCreators/dashboard/dasboardActions";
import { fetchCustomers, getCustomerPagination, setCustomerPagination } from "../../store/actionCreators/Customers/CustomerAction";
function Customer(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(clearDashBoard());
      dispatch(setCustomerPagination(1))
    },[])



    return (<React.Fragment>
        <Routes>
            <Route path="/" element={<CustomerDashboard  sideToggle={props.sideToggle}  />} />
            <Route path="/individual" element={<IndividualCustomer  sideToggle={props.sideToggle} />} />
            <Route path="/addCustomer" element={<AddCustomer  sideToggle={props.sideToggle}  />} />
            <Route path='/allCustomer' element={<AllCustomer sideToggle={props.sideToggle}  />}></Route>
        </Routes>
    </React.Fragment>)





}
export default Customer;