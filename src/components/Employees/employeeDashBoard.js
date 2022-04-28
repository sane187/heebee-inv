import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import EmployeeTable from './EmployeeTable';
const EmployeeDashBoard = props => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
           <Row>
                <Col className="dash-head">Employee Dashboard</Col>
            </Row>
            <Row>
               <EmployeeTable employee={props.employee} currEmployee={props.employee} setEmployee={props.setEmployee}/>
            </Row>
        </Container>
    );
};

export default EmployeeDashBoard;