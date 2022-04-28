import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import "../../css/employee/addNewEmployee.css"
import { getBranches } from '../../store/actionCreators/Branch/BranchAction';
const AddNewEmp = (props) => {
    const dispatch =useDispatch();
    const branch = useSelector(state => state.branch)
    const [selectedBranches, setSelected] = useState([]);
    const [options, setOptions] = useState([])
    useEffect(() => {
        dispatch(getBranches());
        console.log("Branch", branch)
      }, [])
      useEffect(() => {
        let array = []
        if (branch.data) {
          branch.data.data.map((item, index) => {
            array.push({ label: item.branch_name, value: item.branch_id })
          })
        }
        setOptions(array)
        console.log(array)
      }, [branch])
    
    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
          return `${placeholderButtonLabel}: All`;
        } else {
          return `${placeholderButtonLabel}: ${value.length} selected`;
        }
      }
      function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
          this.setState(this.options);
        } else if (
          event.action === "deselect-option" &&
          event.option.value === "*"
        ) {
          this.setState([]);
        } else if (event.action === "deselect-option") {
          this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
          this.setState(this.options);
        } else {
          this.setState(value);
        }
      }
    
      const displayBranch = () => {
    
        if (options) {
          return <div className='categorySelect'><ReactMultiselectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            placeholderButtonLabel="Branches"
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedBranches}
            onChange={onChange}
            setState={setSelected}
            required
          /></div>
        }
    
      }
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add New Employee 1</div>
                    <div className='form-body'>
                        <form>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required />
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
                                    <input type="password" className="form-control" aria-describedby="emailHelp" required  />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" aria-describedby="emailHelp" required  />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Status</label>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option defaultValue={"Active"}>Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                <label className="form-label">Barnches</label>
                                   {displayBranch()}
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
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required   />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Employee Role</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" required   />
                                </div></Col>

                            </Row>
                            <div className="p-2"><button className='btn btn-primary btn-lg ' >Submit</button></div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddNewEmp;