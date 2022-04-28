import React,{ useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';
import faker from "@faker-js/faker";
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const TotalOrdersTaken = (props) => {
    const fakeData = () => {
        let array = [];
        for (let index = 0; index < 20; index++) {
          const element = { "Orderid": `${faker.datatype.uuid().slice(0,10)}`, "Ordered Items": `${faker.commerce.product()},${faker.commerce.product()},${faker.commerce.product()}`, "Amount": `${faker.commerce.price()}`, "PaymentMethod": `${faker.finance.transactionType()}`, "PaymentId": `${faker.datatype.uuid().slice(0,7)}`, "coupon": `${faker.datatype.boolean()}`, "Group": `${faker.name.jobDescriptor()}`, "order date": `${String(faker.date.recent()).slice(0,-30)}` }
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
      dataField: 'Orderid',
      text: 'Order ID',
      sort: true
    }, {
      dataField: 'Ordered Items',
      text: 'Ordered Items',
      sort: false
    }, {
      dataField: 'Amount',
      text: 'Amount',
      sort: false
    }, {
      dataField: 'PaymentMethod',
      text: 'Payment Method',
      sort: true
    }, {
      dataField: 'PaymentId',
      text: 'PaymentId',
      sort: true
    }, {
      dataField: 'coupon',
      text: 'Coupon',
      sort: false
    },{
        dataField: 'Group',
        text: 'Group',
        sort: false
      },{
        dataField: 'order date',
        text: 'Order date',
        sort: true
      }
  ];

  const defaultSorted = [{
    dataField: 'order date',
    order: 'desc'
  }];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers),
    custom: true,
  }

  const { SearchBar } = Search;

  return (
    <React.Fragment>
      <div className="page-content mt-4 mb-3">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col className="col-12">
              <Card>
                <Card.Body>
                  <Card.Title className="h4 mb-2">Total Orders Taken</Card.Title>

                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField='Orderid'
                    columns={columns}
                    data={productData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField='Orderid'
                        columns={columns}
                        data={productData}
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>

                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar
                                      {...toolkitProps.searchProps}
                                    />
                                    <i className="search-box chat-search-box" />
                                  </div>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    keyField={"Orderid"}
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

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <div className="d-inline">
                                  <SizePerPageDropdownStandalone
                                    {...paginationProps}
                                  />
                                </div>
                                <div className="text-md-right ms-auto">
                                  <PaginationListStandalone

                                    {...paginationProps}
                                    className="table-pagination"
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
  )

}

export default TotalOrdersTaken;