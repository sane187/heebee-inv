import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBranch } from '../../../store/actionCreators/Branch/BranchAction';
import NoData from '../../NoData';
import BigCard from './BigCard';

const IndividFranchise = (props) => {
    const branchArray = props.franchise.branches;
    const dispatch = useDispatch()
    const branchData = useSelector(state => state.single_branch)
    const [currentFilter, setCurrentFilters] = useState({
        branch: { branch_name: '', branch_id: '' }
    })


    useEffect(() => {
        dispatch(getSingleBranch(currentFilter.branch.branch_id))
    }, [currentFilter])
    const BranchDrop = () => {
        return branchArray.map((item, index) => {
            return (<option key={index} value={`["${item.branch_name}","${item.branch_id}"]`}>{item.branch_name ? item.branch_name : item}</option>)
        })
    }
    console.log(props)
    const handleBranchChange = (e) => {
        let item = JSON.parse(e.target.value)
        setCurrentFilters({
            ...currentFilter, branch: { branch_name: item[0], branch_id: item[1] }
        })
    }
   
    const BigCard1 = () => {
        if (branchData.status === "success") {
            if (branchData.data.categories) {
                return (
                    branchData.data.categories.map((item, index) => {
                        return (
                            <BigCard key={index} item={item} index={index} />
                        )
                    })
                )
            }
        }
    }
    const main = () => {
        if (props.franchise.branches && branchData.data) {
            return (
                <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
                    <Row>
                        <Col lg={9} sm={6} xs={12} className="dash-head">Employee Dashboard</Col>
                        <Col lg={3} sm={6} xs={12}>
                            <Row>

                                <Col>
                                    <div className="form-group drop-dash">
                                        <select className="form-control form-select form-select-sm" name="year" onChange={handleBranchChange}>
                                            {BranchDrop()}
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <Card style={{ backgroundColor: "#518BFF", color: "white" }}>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Franchise Name</p>
                                            <h4 className="mb-0">{props.franchise.franchise_name}</h4>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card style={{ backgroundColor: "#FFC257", color: "white" }}>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Current Selected Branch</p>
                                            <h4 className="mb-0">{branchData.data.branch_name}</h4>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card style={{ backgroundColor: "#FF7FAF", color: "white" }}>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Location</p>
                                            <h4 className="mb-0">{props.franchise.location}</h4>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card style={{ backgroundColor: "#8254FF", color: "white" }}>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2 text-light">Number of Branches</p>
                                            <h4 className="mb-0">{props.franchise.no_branches}</h4>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} sm={12} className="mt-4 mb-4">
                            <Card className="" style={{ backgroundColor: "#fff", color: "grey" }}>
                                <Card.Body className="p-3" >
                                    <h5><b >Products And Categories</b></h5>
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
                    <NoData data={"No Franchise Selected "} />
                </Container>
            )
        }
    }
    return (
        <>{main()}</>
    );
};

export default IndividFranchise;