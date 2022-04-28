import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
//Import Charts
import ReactApexChart from 'react-apexcharts';
import { BsFillCircleFill } from "react-icons/bs";
class CustomerDoughnut extends Component {
    state = {
        series: [42, 26, 15, 36],
        options: {
            labels: ["Branch A", "Branch B", "Branch C", "Branch D"],
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
            colors: ['#5664d2', '#1cbb8c', '#eeb902', '#FF3D60'],

        }
    }
    render() {
        return (
            <React.Fragment>

               
                <h4 className="card-title" style={{ fontSize: "15px", color: "#343a40" }}>Customer Analytics</h4>
                <div className='d-flex mb-4 justify-content-end'>
                <div className="">
                    <select className="form-select form-select-sm">
                        <option defaultValue>All Branch</option>
                        <option value="1">Branch 1</option>
                        <option value="2">Branch 2</option>
                        <option value="3">Branch nth</option>
                    </select>
                </div>
                <div className='ml-2'>
                    <select className="form-select form-select-sm">
                        <option defaultValue>All state</option>
                        <option value="1">Madhya Pradesh</option>
                        <option value="2">Chandigarh</option>
                        <option value="3">state nth</option>
                    </select>
                </div>
                </div>
                <div id="donut-chart" className="apex-charts">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="250" />
                </div>

                <Row>
                    <Col xs={3}>
                        <div className="text-center mt-4">
                            <p className="dougnhut-text"><BsFillCircleFill style={{ color: "#5664d2" }} /> A</p>
                            <h5>42 %</h5>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="text-center mt-4">
                            <p className="dougnhut-text"><BsFillCircleFill style={{ color: "#1cbb8c" }} /> B</p>
                            <h5>26 %</h5>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="text-center mt-4">
                            <p className="dougnhut-text"><BsFillCircleFill style={{ color: "#eeb902" }} /> C</p>
                            <h5>42 %</h5>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="text-center mt-4">
                            <p className="dougnhut-text"><BsFillCircleFill style={{ color: "#FF3D60" }} /> D</p>
                            <h5>42 %</h5>
                        </div>
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default CustomerDoughnut;


