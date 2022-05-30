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
import {
  fetchCustomers,
  getCustomerPagination,
  setCustomerPagination,
} from "../../store/actionCreators/Customers/CustomerAction";
import Unauthorized from "./../unauthorized";
function Customer(props) {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [viewPermission, setViewPermission] = useState(false);
  const [editPermission, setEditPermission] = useState(false);
  useEffect(() => {
    dispatch(clearDashBoard());
    dispatch(setCustomerPagination(1));
    editPermissions();
  }, []);
  const editPermissions = () => {
    if (login && login.login.status === "success") {
      const { admin_permissions } = login.login.data;
      admin_permissions.forEach((item) => {
        if (item.module === "Customer") {
          console.log("permission given");
          if (item.read === true) setViewPermission(true);
          if (item.write === true) setEditPermission(true);
        }
      });
    }
  };

  if (viewPermission)
    return (
      <React.Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <CustomerDashboard
                editPermission={editPermission}
                viewPermission={viewPermission}
                sideToggle={props.sideToggle}
              />
            }
          />
          <Route
            path="/individual"
            element={
              <IndividualCustomer
                editPermission={editPermission}
                viewPermission={viewPermission}
                sideToggle={props.sideToggle}
              />
            }
          />
          <Route
            path="/addCustomer"
            element={
              <AddCustomer
                editPermission={editPermission}
                viewPermission={viewPermission}
                sideToggle={props.sideToggle}
              />
            }
          />
          <Route
            path="/allCustomer"
            element={
              <AllCustomer
                editPermission={editPermission}
                viewPermission={viewPermission}
                sideToggle={props.sideToggle}
              />
            }
          ></Route>
        </Routes>
      </React.Fragment>
    );
  return <Unauthorized />;
}
export default Customer;
