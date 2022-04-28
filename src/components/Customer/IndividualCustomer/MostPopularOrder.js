import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useState } from 'react';
import faker from "@faker-js/faker";
const MostPopularOrder = props => {
    const fakeData = () => {
        let array = [];
        for (let index = 0; index < 5; index++) {
          const element = { "Num":index,"MostPop": `${faker.commerce.product()}`, "TotalPurchase": `₹${faker.commerce.price()*100}`, "AvgPurchase": `${faker.commerce.price()}`}
          array.push(element);
        }
        return array;
      }
      const products = fakeData();
  const [productData,setProductData]=useState(products);

  async function handleSubmit(event) {
    event.preventDefault();

  }

  const columns = [
    {
      dataField: 'MostPop',
      text: 'Most Popular Item',
      sort: true
    }, {
      dataField: 'TotalPurchase',
      text: 'Total Purchase',
      sort: true
    }, {
      dataField: 'AvgPurchase',
      text: 'Average Purchase',
      sort: false
    }
  ];

  const defaultSorted = [{
    dataField: 'TotalPurchase',
    order: 'desc'
  }];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers),
    custom: true,
  }

  const { SearchBar } = Search;
    return(
        <React.Fragment>
        <div className="page-content mt-4">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="col-12">
                <Card>
                  <Card.Body>
                    <Card.Title className="h4 mb-2">Most Popular Orders </Card.Title>
  
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='Num'
                      columns={columns}
                      data={productData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='Num'
                          columns={columns}
                          data={productData}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"Num"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
  
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />
  
                                  </div>
                                </Col>
                              </Row>
  
                              
                            </React.Fragment>
                          )
                          }
                        </ToolkitProvider>
                      )
                      }</PaginationProvider>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </form>
        </div>
      </React.Fragment>
    );
    
        
};


export default MostPopularOrder;