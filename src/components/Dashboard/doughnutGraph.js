import React, { Component } from 'react';
import {  Row, Col } from "react-bootstrap";
//Import Charts
import ReactApexChart from 'react-apexcharts';
import {BsFillCircleFill} from "react-icons/bs";
import "../../css/miniWidgets.css";
class DoughnutGraph extends Component {
    state = {
        series: [42, 26, 15],
        options: {
            labels: ["Product A", "Product B", "Product C"],
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            colors: ['#5664d2', '#1cbb8c', '#eeb902'],

        }
    }
    render() {
        return (
            <React.Fragment>

                        <div className="float-end">
                            <select className="form-select form-select-sm">
                                <option defaultValue>Apr</option>
                                <option value="1">Mar</option>
                                <option value="2">Feb</option>
                                <option value="3">Jan</option>
                            </select>
                        </div>
                        <h4 className="card-title mb-4" style={{fontSize:"15px", color:"#343a40"}}>Sales Analytics</h4>

                        <div id="donut-chart" className="apex-charts">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="250" />
                        </div>

                        <Row>
                            <Col xs={4}>
                                <div className="text-center mt-4">
                                    <p className="dougnhut-text"><BsFillCircleFill style={{color:"#5664d2"}}/> Product A</p>
                                    <h5>42 %</h5>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="text-center mt-4">
                                    <p className="dougnhut-text"><BsFillCircleFill style={{color:"#1cbb8c"}}/> Product B</p>
                                    <h5>26 %</h5>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="text-center mt-4">
                                    <p className="dougnhut-text"><BsFillCircleFill style={{color:"#eeb902"}}/> Product C</p>
                                    <h5>42 %</h5>
                                </div>
                            </Col>
                        </Row>
                   
            </React.Fragment>
        );
    }
}

export default DoughnutGraph;


