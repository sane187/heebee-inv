import React from "react"
import { Row, Col, Card } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

import { useState } from 'react';

const EmployeeRoleTable = (props) => {
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);
  const [productData, setProductData] = useState(props.employee);
  const onClickFunction = (index) => {
    props.setEmployee(index);
  }
  console.log(props);
  function rankFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <div
        style={{

          cursor: "pointer",
          lineHeight: "normal"
        }}>
        <Link
          exact="true"
          to="/user/edit"
          onClick={() => onClickFunction(row)}
          className="btn btn-sm btn-warning ms-0 align-left" >
          Edit
        </Link>
      </div >
    );
  }
  async function handleSubmit(event) {
    event.preventDefault();

  }

  const columns = [
    {
      dataField: 'EmpId',
      text: 'EmpId',
      sort: false
    },
    {
      dataField: 'name',
      text: 'Full Name',
      sort: true
    }, {
      dataField: 'telephone',
      text: 'Phone',
      sort: false
    }, {
      dataField: 'Branchname',
      text: 'Branch',
      sort: true
    }, {
      dataField: 'gender',
      text: 'Gender',
      sort: true
    }, {
      dataField: 'Edit',
      text: 'Actions',
      isDummyField: true,
      csvExport: false,
      formatter: rankFormatter,
    }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'asc'
  }];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers),
    custom: true,
  }

  const { SearchBar } = Search;
  return (

    <React.Fragment>
      <div className="page-content ">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col className="col-12">
              <Card>
                <Card.Body>
                  <Card.Title className="h4 mb-2 ">Employee Datatable </Card.Title>

                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField='EmpId'
                    columns={columns}
                    data={productData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField='EmpId'
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

                                    keyField={"EmpId"}
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
  );
};

export default EmployeeRoleTable;