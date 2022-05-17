import React, { Component, useEffect, useState } from 'react';
import { Card,Button,ButtonGroup } from "react-bootstrap";
//Import Charts
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
const IndividualCustomerRevenue =()=>{
   const graph=useSelector(state=>state.order_analytics_graph);
  const [ state,setState] =useState({
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
    }}) 

useEffect(()=>{
 if(graph.data){
 setState({
    series: [{
        type: 'column',
        data: graph.data.X
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
        colors: ['#1cbb8c'],
        labels: graph.data.Y
    }})
 }
},[graph])
   
 const main=()=>{
     if(graph.data){
       return(
        <React.Fragment>
        <Card className="mt-4">
            <Card.Body>
           
                <h4 className="card-title mb-4 revenue" >Customer Analytics</h4>

                <div>
                    <div id="line-column-chart" className="apex-charts" dir="ltr">
                        <ReactApexChart options={state.options} series={state.series} type="line" height="255" />
                    </div>
                </div>
            </Card.Body>

        </Card>
    </React.Fragment>
       )  
     }
 }
        return (
            <React.Fragment>
             {main()}
            </React.Fragment>
        );

}

export default IndividualCustomerRevenue;