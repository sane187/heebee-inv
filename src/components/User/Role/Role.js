import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EmployeeRoleTable from './EmployeeRoleTable';

const Role = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
           <Row>
                <Col className="dash-head">Employee Role Dashboard</Col>
            </Row>
            <Row>
               <EmployeeRoleTable employee={props.employee} currEmployee={props.employee} setEmployee={props.setEmployee}/>
            </Row>
        </Container>
    );
};

export default Role;