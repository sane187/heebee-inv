import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import EmployeeDashBoard from './employeeDashBoard';
import IndividualEmployee from './IndividualEmployee';
import AddNewEmp from './AddNewEmp';
import { useDispatch } from 'react-redux';
import { setCustomerVars } from '../../store/actionCreators/Customers/CustomerAction';
import { clearDashBoard } from '../../store/actionCreators/dashboard/dasboardActions';

const  Employee =(props) =>{
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setCustomerVars())
    dispatch(clearDashBoard());
},[])

    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<EmployeeDashBoard sideToggle={props.sideToggle}  />} />
          <Route path="/individual" element={<IndividualEmployee sideToggle={props.sideToggle}  />} />
          <Route path="/addNew" element={<AddNewEmp sideToggle={props.sideToggle}  />} />
        </Routes>
      </React.Fragment>
    );
  
};


export default Employee;