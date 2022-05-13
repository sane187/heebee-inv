import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './app.css';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/dashboard';
import Customer from './components/Customer/customer';
import Employee from './components/Employees/employee';
import AllCustomer from './components/Customer/Allcustomer';
import IndivudualCustomer from './components/Customer/individualCustomers';
import Error404 from './components/error404';
import React, { useState } from 'react';
import Footer from './components/footer';
import Branch from './components/Branch/Branch';
import Catalog from './components/Catalog/Catalog';
import { ToastContainer } from 'react-toastify';
import User from './components/User/user';
import Login from './components/authentication/Login';
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const handle = useFullScreenHandle();

  return (
    <Router>
      <FullScreen handle={handle}>
        <React.Fragment>
          <Sidebar handle={handle} setSideToggle={setSideToggle} sideToggle={sideToggle} />
          <Routes>
          <Route path='/' element={<Dashboard sideToggle={sideToggle} />}></Route>
            <Route path='/login' element={<Login sideToggle={sideToggle} />}></Route>
            <Route path='/customer/*' element={<Customer sideToggle={sideToggle} />}></Route>
            <Route path='/employee/*' element={<Employee sideToggle={sideToggle} />}></Route>
            <Route path="/branch/*" element={<Branch sideToggle={sideToggle} />}></Route>
            <Route path="/catalog/*" element={<Catalog sideToggle={sideToggle} />}></Route>
            <Route path="/user/*" element={<User sideToggle={sideToggle} />}></Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </React.Fragment>
       
      </FullScreen>
      <ToastContainer />
     
    </Router>

  );
}

export default App;
