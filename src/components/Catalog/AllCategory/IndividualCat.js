import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { get_category_branches } from '../../../store/actionCreators/Catalog/Catalog';
import NoData from '../../NoData';
import BigCard from './BigCard';

const IndividualCat = (props) => {
    const Branches = useSelector(state => state.getBranchInCat)
    const CategoryData = useSelector(state => state.getCatByBranch)
    const [currbranch, setCurrBranch] = useState(["Branch"])
    const dispatch = useDispatch()
    const displayBranches = () => {
        if (Branches.data) {
            return Branches.data.map((item, index) => {
                return (<Dropdown.Item key={item.branch_id} eventKey={`["${item.branch.branch_name}","${item.branch_id}"]`}> {item.branch.branch_name}</Dropdown.Item>)

            })
        }
    }
    useEffect(() => {
        if (currbranch[0] !== "Branch") {
            dispatch(get_category_branches(props.currentCategory.category_list_id, currbranch[1]))
        }
    }, [currbranch])
 console.log(props.currentCategory)
    const handleSelectB = (e) => {
        const item = JSON.parse(e)
        setCurrBranch([item[0], item[1]])
    }
    const BigCard1 = () => {
        if (CategoryData.status === "success") {

            return (
                CategoryData.data.map((item, index) => {
                    return (
                        <BigCard key={index} item={item} index={index} />
                    )
                })
            )

        }
    }
    const main = () => {
        if (CategoryData && Branches.data && props.currentCategory.category_name) {
            return (
                <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
                    <Row>
                        <Col lg={10} xs={12} className="dash-head">DASHBOARD</Col>
                        <Col lg={2} xs={12}>
                            <Row>
                                <Col> <div className=" p-2 ">
                                    <div className='d-flex'>
                                        <DropdownButton
                                            variant="light"
                                            title={currbranch[0]}
                                            id="dropdown-menu-align-right"
                                            onSelect={handleSelectB}
                                        >
                                            {displayBranches()}
                                        </DropdownButton>

                                    </div>


                                </div></Col>


                            </Row>

                        </Col>

                    </Row>
                    <Row>
                        <Col xl={6} sm={12} className="mb-4">
                            <Card className="" style={{ backgroundColor: "#fff", color: "grey" }}>
                                <Card.Body className="" >
                                    <h5><b >{props.currentCategory.category_name} category in  {currbranch[0]}</b></h5>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        {BigCard1()}
                    </Row>
                </Container>
            )
        }
        else {
            return (
                <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
                  <NoData data="No Category selected"/>
                </Container>
            )
        }
    }
    return (
        <>{main()}</>
    );
};

export default IndividualCat;