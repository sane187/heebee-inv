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
    // const fakeData = () => {
    //     let array = [];
    //     for (let index = 0; index < 10; index++) {
    //         const element = { "id": `${faker.datatype.uuid()}`, "name": `${faker.name.findName()}`, "address": `${faker.address.streetAddress()} ${faker.address.cityName()}`, "email": `${faker.internet.email()}`, "telephone": `${faker.phone.phoneNumber()}`, "zip": `${faker.address.zipCode()}`, "city": `${faker.address.city()}`, "franchise": `${faker.address.streetAddress()}`, "order date": `${String(faker.date.recent()).slice(0, -30)}`, "gender": `${faker.name.gender(true)}` }
    //         array.push(element);
    //     }
    //     return array;
    // }
    // const products = fakeData();
     const [currentCustomer, setCustomer] = useState(null)

    return (<React.Fragment>
        <Routes>
            <Route path="/" element={<CustomerDashboard  sideToggle={props.sideToggle} currentCustomer={currentCustomer} setCustomer={setCustomer} />} />
            <Route path="/individual" element={<IndividualCustomer  sideToggle={props.sideToggle} currentCustomer={currentCustomer} />} />
            <Route path="/addCustomer" element={<AddCustomer  sideToggle={props.sideToggle} currentCustomer={currentCustomer} />} />
            <Route path='/allCustomer' element={<AllCustomer sideToggle={props.sideToggle} currentCustomer={currentCustomer} setCustomer={setCustomer} />}></Route>
        </Routes>
    </React.Fragment>)





}
export default Customer;