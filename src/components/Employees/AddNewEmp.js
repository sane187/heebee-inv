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
    const [state,setState]=useState({
      full_name:"",
      mobile_no:"",
      email:"",
    password:"",
      profile_pic:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png",
      date_of_birth:"",
      address:"",
      branches:"",
      branch_id:"",
      employee_role:"",
      employee_role_id:"",
      gender:""
    })
    const onStateChange=(input)=>(e)=>{
     setState({...state,[input]:e.target.value})
    }

    useEffect(() => {
        dispatch(getBranches());
       
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
      console.log("Branch", selectedBranches)
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
                                    <input  value={state.full_name} onChange={onStateChange('full_name')} type="text" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Mobile Number</label>
                                    <input value={state.mobile_no} onChange={onStateChange('mobile_no')} type="text" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Email</label>
                                    <input value={state.email} onChange={onStateChange('email')} type="email" className="form-control" aria-describedby="emailHelp" required />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Password</label>
                                    <input value={state.password} onChange={onStateChange('password')} type="password" className="form-control" aria-describedby="emailHelp" required  />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Date Of Birth</label>
                                    <input value={state.date_of_birth} onChange={onStateChange('date_of_birth')} type="date" className="form-control" aria-describedby="emailHelp" required  />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Status</label>
                                    <select onChange={onStateChange('status')} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option defaultValue={"Active"}>Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                <label className="form-label">Barnches</label>
                                   {displayBranch()}
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Gender</label>
                                    <div className='d-flex' >
                                        <div className="form-check me-3">
                                            <input value={"male"} onChange={onStateChange('gender')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Male
                                            </label></div>
                                        <div className="form-check ">
                                            <input value={"female"} onChange={onStateChange('gender')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
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
                                    <input value={state.address} type="text" className="form-control" aria-describedby="emailHelp" required   />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Employee Role</label>
                                    <input value={state.employee_role} type="text" className="form-control" aria-describedby="emailHelp" required   />
                                </div></Col>

                            </Row>
                            <div className="p-2"><button className='btn btn-primary ' >Submit</button></div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddNewEmp;