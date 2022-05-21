import React, { useEffect, useState } from 'react';
import { Col, Container,Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
import FranchiseReducer from '../../../store/reducers/Franchise/FranchiseReducer';


const AddAdminmain = (props) => {
  const dispatch = useDispatch();
  const branch = useSelector(state => state.branch)
  const franchise = useSelector(state => state.franchise)
  const [state, setState] = useState({
    "username": "",
    "phone": "",
    "email": "",
    "password": "",
    "date_of_birth": "",
    "branch_id": "",
    "franchise_id": "",
    "admin_role_id": "",
    "gender": ''
  })
  const [currbranch, setCurrBranch]=useState("")
  const [currfran, setCurrFran]=useState("")
  useEffect(() => {
    dispatch(getBranches());
    console.log("Branch", branch)
  }, [])
  const displayBranches = () => {
    if (branch.data) {
      return branch.data.data.map((item, index) => {
        return (<Dropdown.Item key={item.branch_id} eventKey={`["${item.branch_name}","${item.branch_id}"]`}> {item.branch_name}</Dropdown.Item>)

      })
    }
  }
  const handleSelectB = (e) => {
    const item = JSON.parse(e)
    setState({ ...state, branch_id: item[1] })
    setCurrBranch(item[0])
  }
  const displayFranchise = () => {
    if (branch.data) {
      return franchise.data.data.map((item, index) => {
        return (<Dropdown.Item key={item.franchise_id} eventKey={`["${item.franchise_name}","${item.franchise_id}"]`}> {item.franchise_name}</Dropdown.Item>)

      })
    }
  }
  const handleSelectF = (e) => {
    const item = JSON.parse(e)
    setState({ ...state, franchise_id: item[1] })
    setCurrFran(item[0])
  }
  const onNext = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {


    }

    e.preventDefault();

  }
  const main = () => {
    return (
      <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <div className='row d-flex justify-content-center'>
          <div className='form-container'>
            <div className='form-head'>Add New Admin</div>
            <div className='form-body'>
              <Form onSubmit={onNext} className='needs-validation'>
                <Row>
                  <Col>

                    <div className="mb-3 p-2 position-relative">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" aria-describedby="emailHelp" required />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </div></Col>
                  <Col> <div className="mb-3 p-2">
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" required />
                  </div></Col>

                </Row>
                <Row>
                  <Col> <div className="mb-3 p-2">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" required />
                  </div></Col>
                  <Col> <div className="mb-3 p-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" aria-describedby="emailHelp" required />
                  </div></Col>

                </Row>
                <Row>
                  <Col> <div className="mb-3 p-2">
                    <label className="form-label">Date Of Birth</label>
                    <input type="date" className="form-control" aria-describedby="emailHelp" required />
                  </div></Col>
                
                  <Col> <div className="mb-3 p-2 ">
                    <label className="form-label">Branch</label>
                    <div className='d-flex'>
                      <DropdownButton
                        variant="light"
                        title={currbranch?currbranch:"Branch"}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectB}
                      >
                        {displayBranches()}
                      </DropdownButton>
                     
                    </div>


                  </div></Col>
                  <Col> <div className="mb-3 p-2 ">
                    <label className="form-label">Franchise</label>
                    <div className='d-flex'>
                      <DropdownButton
                        variant="light"
                        title={currfran?currfran:"Franchise"}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectF}
                      >
                        {displayFranchise()}
                      </DropdownButton>
                     
                    </div>


                  </div></Col>
                  <Col> <div className="mb-3 p-2">
                    <label className="form-label">Gender</label>
                    <div className='d-flex'>
                      <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Male
                        </label></div>
                      <div className="form-check ">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Female
                        </label>
                      </div>
                    </div>
                  </div></Col>

                </Row>
                <Row>
               
                </Row>
                <div className="p-2"><button type="submit" className='btn btn-primary ' >Next</button></div>

              </Form>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div>
      {main()}
    </div>
  );
};

export default AddAdminmain;