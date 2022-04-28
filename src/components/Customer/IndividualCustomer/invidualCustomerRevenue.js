import React, { Component } from 'react';
import { Card,Button,ButtonGroup } from "react-bootstrap";
//Import Charts
import ReactApexChart from 'react-apexcharts';
class IndividualCustomerRevenue extends Component {
  
    
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
                    <div className="float-end d-none d-md-inline-block">
                            <ButtonGroup className="mb-2 graph-buttons" style={{fontFamily:"Nunito,sans-serif"}}>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Today</Button>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Weekly</Button>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Monthly</Button>
                            </ButtonGroup>
                        </div>
                        <h4 className="card-title mb-4 revenue" >Customer Analytics</h4>

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

export default IndividualCustomerRevenue;