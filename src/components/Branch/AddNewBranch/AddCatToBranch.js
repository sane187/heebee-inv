import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import CatBigCards from "./CatBigCards";

const AddCatToBranch = (props) => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const branch = useSelector((state) => state.branch);
  const [currbranch, setCurrBranch] = useState({});

  const BigCard = () => {
    if (categories.data) {
      return categories.data.data.map((item, index) => {
        return <CatBigCards item={item} index={index} key={index} />;
      });
    }
  };

  const displayBranches = () => {
    if (branch.data) {
      return branch.data.data.map((item, index) => {
        return (
          <Dropdown.Item
            key={item.branch_id}
            eventKey={`["${item.branch_name}","${item.branch_id}"]`}
          >
            {" "}
            {item.branch_name}
          </Dropdown.Item>
        );
      });
    }
  };
  const handleSelectB = (e) => {
    const item = JSON.parse(e);

    setCurrBranch({ branch_name: item[0], branch_id: item[1] });
  };

  return (
    <Container
      fluid
      className={props.sideToggle === true ? "closeDash" : "openDash"}
      style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }}
    >
      <div className="row d-flex justify-content-center">
        <div className="form-container">
          <div className="form-head">Add Categories and Products</div>
          <div className="d-flex">
            <div className="d-flex my-2 mx-auto">
              <label className="my-auto mr-2">
                Select a branch to clone categories and items:{" "}
              </label>
              <DropdownButton
                variant="light"
                title={
                  currbranch.branch_name ? currbranch.branch_name : "Branch"
                }
                id="dropdown-menu-align-right"
                onSelect={handleSelectB}
              >
                {displayBranches()}
              </DropdownButton>
            </div>
          </div>
          <div className="form-body">
            <form>
              <Row>{BigCard()}</Row>
              <Row>
                <Col>
                  {" "}
                  <div className="mb-2 p-2">
                    <button
                      className="btn btn-primary me-2  "
                      onClick={() => props.setStep(1)}
                    >
                      Back
                    </button>
                    <button className="btn btn-primary me-2  ">Submit</button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddCatToBranch;
