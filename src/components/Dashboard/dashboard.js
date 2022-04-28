import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DoughnutGraph from "./doughnutGraph";
import React from "react";
import RevenueAnalytics from "./revenueAnalytics";
import MiniWidgets from "./miniWidgets";
import "../../css/dashboard.css";
import {RiStackLine} from "react-icons/ri";
import {RiStore2Line} from "react-icons/ri";
import {RiBriefcase4Line} from "react-icons/ri";
const Dashboard = (props) => {
    
    const reports = [
        { icon: RiStackLine, title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
        { icon: RiStore2Line, title: "Sales Revenue", value: "₹ 3845200", rate: "2.4%", desc: "From previous period" },
        { icon: RiBriefcase4Line, title: "Average Sales per Day", value: "₹ 10000", rate: "2.4%", desc: "From previous period" },
    ]
    return (
        <React.Fragment>
           
            <Container fluid className={props.sideToggle===true?"closeDash":"openDash"} style={{paddingTop:"95px",backgroundColor:"#F1F5F7"}} >
            <Row>
                <Col className="dash-head">DASHBOARD</Col>
            </Row>
                <Row >
                    <Col lg="8">
                        <Row>
                            <MiniWidgets reports={reports} />
                        </Row>
                    
                        <RevenueAnalytics />
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '100%', boxShadow: " 0 2px 4px rgb(0 0 0 / 8%)" }}>

                            <Card.Body>

                                <DoughnutGraph></DoughnutGraph>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>
        </React.Fragment>

    )
}
export default Dashboard;