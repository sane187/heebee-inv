import React, { Component } from 'react';
import { Row, Col, Card,ButtonGroup, Button } from "react-bootstrap";

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "../../css/miniWidgets.css"
import {BsFillCircleFill} from "react-icons/bs";
import {VscTriangleUp} from "react-icons/vsc";

const RevenueAnalytics =({revenueAnalytics,revenueGraph})=>{
        const extras=()=>{
            if(revenueGraph.data){
                return(
                    <Card.Body className="border-top text-center">
                        <Row>
                            <Col sm={4}>
                            <p className="mb-2 text-muted text-truncate ra-14">This month :</p>
                                <div className="d-inline-flex">
                                    <h5 className="me-2">₹ {revenueGraph.data.this_month}</h5>
                                    <div className="text-success">
                                   </div>
                                </div>
                                
                            </Col>

                            <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-2 text-muted text-truncate ra-14"><BsFillCircleFill style={{color:"#6F7BD9"}}/> This Year :</p>
                                    <div className="d-inline-flex">
                                        <h5 className="mb-0 me-2">₹ {revenueGraph.data.this_year.revenue}</h5>
                                        <div className="text-success"><VscTriangleUp/>{revenueGraph.data.this_year.percentage.slice(1,-1)} % </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-2 text-muted text-truncate ra-14"><BsFillCircleFill style={{color:"#1CBB8C"}}/> Previous Year :</p>
                                    <div className="d-inline-flex">
                                        <h5 className="mb-0 me-2">₹ {revenueGraph.data.prev_year}</h5>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Card.Body>)
            }
        }
        return (
            <React.Fragment>
                <Card className="mt-4">
                    <Card.Body>
                       
                        <h4 className="card-title mb-4 revenue" >Revenue Analytics</h4>
                        <div>
                            <div id="line-column-chart" className="apex-charts" dir="ltr">
                                <ReactApexChart options={revenueAnalytics.options} series={revenueAnalytics.series} type="line" height="280" />
                            </div>
                        </div>
                    </Card.Body>
                    {extras()}
                </Card>
               
            </React.Fragment>
        );
       
       
    
}

export default RevenueAnalytics;