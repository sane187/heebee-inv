import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from "react-router-dom";
import EmployeeDashBoard from './employeeDashBoard';
import IndividualEmployee from './IndividualEmployee';
import AddNewEmp from './AddNewEmp';
import faker from '@faker-js/faker';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    const fakeData = () => {
      let array = [];
      for (let index = 0; index < 10; index++) {
        const element = { "EmpId": `${faker.datatype.uuid().slice(0, 8)}`, "name": `${faker.name.findName()}`, "empRole": `${faker.commerce.department()}`, "address": `${faker.address.streetAddress()} ${faker.address.cityName()}`, "email": `${faker.internet.email()}`, "telephone": `${faker.phone.phoneNumber()}`, "DOB": `${String(faker.date.past(40)).slice(4, -39)}`, "status": `status`, "token": `token`, "Branchname": `${faker.address.streetAddress()} ${faker.address.cityName()}`, "gender": `${faker.name.gender(true)}` }
        array.push(element);
      }
      return array;
    }
    const emp=fakeData();
    this.state = {
      employeeData: fakeData(),
      employee: emp[0]
    }
  }
  setEmployee = (emp) => {
    this.setState({ employee: emp });
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<EmployeeDashBoard sideToggle={this.props.sideToggle} employee={this.state.employeeData} currEmployee={this.state.employee} setEmployee={this.setEmployee} />} />
          <Route path="/individual" element={<IndividualEmployee sideToggle={this.props.sideToggle} employee={this.state.employee} />} />
          <Route path="/addNew" element={<AddNewEmp sideToggle={this.props.sideToggle}  />} />
        </Routes>
      </React.Fragment>
    );
  }



};


export default Employee;