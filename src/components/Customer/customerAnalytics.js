import React, { Component } from 'react';
import { Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "../../css/miniWidgets.css"
import { BsFillCircleFill } from "react-icons/bs";
import { VscTriangleUp } from "react-icons/vsc";
class CustomerAnalytics extends Component {
    state = {
        series: [{
            name: '2021',
            type: 'column',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
            chart: {
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: [0, 3],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%',
                },
            },
            dataLabels: {
                enabled: false,
            },

            legend: {
                show: false,
            },
            colors: ['#6F7BD9', '#1cbb8c'],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card className="mt-4">
                    <Card.Body>
                        <h4 className="card-title mb-4 revenue" >New Customer Analytics</h4>
                        <div className='d-flex mb-4 justify-content-end'>
                            <div className="">
                                <select className="form-select form-select-sm">
                                    <option defaultValue>Daily</option>
                                    <option value="1">Yearly</option>
                                    <option value="2">Monthly</option>
                                </select>
                            </div>
                            <div className='ml-2'>
                                <select className="form-select form-select-sm">
                                    <option defaultValue>All Branch</option>
                                    <option value="1">Branch 1</option>
                                    <option value="2">Branch 2</option>
                                    <option value="3">Branch nth</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div id="line-column-chart" className="apex-charts" dir="ltr">
                                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="280" />
                            </div>
                        </div>
                    </Card.Body>

                </Card>
            </React.Fragment>
        );
    }
}

export default CustomerAnalytics;