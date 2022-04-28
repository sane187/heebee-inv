import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { ImHourGlass } from "react-icons/im";
import { BsTrophyFill } from "react-icons/bs";
import TotalOrdersTaken from "./individualEmployeeWid/TotalOrdersTaken"
import IndividualEmployeeRevenue from './individualEmployeeWid/IndividualEmployeeRevenue ';
const IndividualEmployee = props => {
    console.log(props.employee)
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <Row>
                <Col className="dash-head">
                    <ButtonGroup aria-label="TLbutton" id="TLbutton">
                        <a href="#OrderAnalytics"> <Button variant="outline-secondary" size="sm">Employee Analytics</Button></a>
                        <a href="#OrderTable"><Button variant="outline-secondary" size="sm">Order Taken Table</Button></a>
                        <a href="#SalesAnalytics"> <Button variant="outline-secondary" size="sm">Sales Analytics</Button></a>
                    </ButtonGroup>Employee Analytics</Col>
            </Row>
            <Row id="OrderAnalytics">
                <Col xl={{ span: "7", order: "first" }} lg={{ span: "7", order: "first" }} md={{ span: "12", order: 2 }} sm={{ span: "12", order: 2 }} xs={{ span: "12", order: 2 }} >
                    <Card className="mb-4" style={{ backgroundColor: "#fff", color: "grey" }}>
                        <Card.Body >
                            <h5><b>Employee Order Analytics</b></h5>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col lg={6} md={6}>
                            <Card style={{ backgroundColor: "#518BFF", color: "white" }}>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Total Orders Taken</p>
                                            <h4 className="mb-2">62</h4>
                                        </div>
                                        <div className="icon text-light" style={{ fontSize: "24px" }}>
                                            <FaRupeeSign />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6}>
                            <Card style={{ backgroundColor: "#FFC257", color: "white" }}>
                                <Card.Body >
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light" >Total Revenue</p>
                                            <h4 className="mb-2">₹ 6246</h4>
                                        </div>
                                        <div className="icon text-light" style={{ fontSize: "24px" }}>
                                            <MdFastfood />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col><Col lg={6} md={6}>
                            <Card className="mt-4" style={{ backgroundColor: "#FF7FAF", color: "white" }}>
                                <Card.Body style={{ height: "110px" }} >
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Popular Order</p>
                                            <h5 className="mb-0" style={{ fontSize: '18px' }}>Chilli cheese Toast</h5>
                                        </div>
                                        <div className="icon text-light" style={{ fontSize: "24px" }}>
                                            <BsTrophyFill />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6}>
                            <Card className="mt-4" style={{ backgroundColor: "#8254FF", color: "white" }}>
                                <Card.Body style={{ height: "110px" }}>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Recent Order</p>
                                            <h5 className="mb-0" style={{ fontSize: '18px' }}>Ice Americano</h5>
                                        </div>
                                        <div className="icon  text-light" style={{ fontSize: "24px" }}>
                                            <ImHourGlass />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>
                {/* Personel Informtion */}
                <Col xl={{ span: "5", order: "4" }} lg={{ span: "5", order: "4" }} md={{ span: "12", order: "first" }} sm={{ span: "12", order: "first" }} xs={{ span: "12", order: "first" }}>
                    <Card>
                        <Card.Header className="pt-3 pb-3" style={{ borderBottom: "0 solid white", backgroundColor: "#fff", color: "grey" }} ><b className="Customer-font ">{props.employee.name} {props.employee.gender === "Female" ? '[F]' : '[M]'}</b></Card.Header>
                        <Card.Body className="pt-0" style={{ overflowX: "auto", paddingRight: "10px" }} >
                            <table className="table table-borderless indi-table mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Branch Name</th>
                                        <td>{props.employee.Branchname}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{props.employee.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Employee Role</th>
                                        <td>{props.employee.empRole}</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">DOB</th>
                                        <td>{props.employee.DOB}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td>{props.employee.telephone}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>{props.employee.address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        <td>{props.employee.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </Col>

                {/*  Personel Informtion Ends*/}

            </Row>
            <Row>
                <TotalOrdersTaken />
            </Row>
            {/* sales Analytics of Employee */}
            <Row id="SalesAnalytics" className="mt-3">
                <Col xl={12}>
                    <Card className="mb-4" style={{ backgroundColor: "#fff", color: "grey" }}>
                        <Card.Body >
                            <h5><b>Sales Analytics</b></h5>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6} sm={12}>
                    <Card style={{ backgroundColor: "#518BFF", color: "white" }}>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-truncate font-size-14 mb-2 text-light" >Total Revenue</p>
                                    <h4 className="mb-0">6246</h4>
                                </div>
                                <div className="icon text-light" style={{ fontSize: "24px" }}>
                                    <FaRupeeSign />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card style={{ backgroundColor: "#FFC257", color: "white" }}>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-truncate font-size-14 mb-2 text-light" >Total Purchase</p>
                                    <h4 className="mb-0">6246</h4>
                                </div>
                                <div className="icon text-light" style={{ fontSize: "24px" }}>
                                    <FaRupeeSign />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card style={{ backgroundColor: "#FF7FAF", color: "white" }} >
                        <Card.Body>
                            <div className="d-flex">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-truncate font-size-14 mb-2 text-light" >Tax</p>
                                    <h4 className="mb-0">6246</h4>
                                </div>
                                <div className="icon text-light" style={{ fontSize: "24px" }}>
                                    <FaRupeeSign />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card style={{ backgroundColor: "#8254FF", color: "white" }}>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-truncate font-size-14 mb-2 text-light" >Avg Purchase</p>
                                    <h4 className="mb-0">₹ 6246</h4>
                                </div>
                                <div className="icon text-light" style={{ fontSize: "24px" }}>
                                    <select className="form-select form-select-sm">
                                        <option defaultValue>7 days</option>
                                        <option value="1">Month</option>
                                        <option value="2">Year</option>
                                    </select>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">

                <Col>
                    <IndividualEmployeeRevenue />
                </Col>
            </Row>
        </Container>
    );
};

export default IndividualEmployee;