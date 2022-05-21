import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBranch } from '../../../store/actionCreators/Branch/BranchAction';
import NoData from '../../NoData';

const IndividFranchise = (props) => {
    const branchArray = props.franchise.branches;
    const dispatch = useDispatch()
    const branchData = useSelector(state => state.single_branch)
    const [currentFilter, setCurrentFilters] = useState({
        branch: { branch_name: 'All', branch_id: 'All' }
    })
    function getDateFromUTC(date) {
        var d = new Date(date);
        let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return (`${dayArr[d.getDay()]} ${monthArray[d.getMonth()]} ${d.getHours()}:${d.getMinutes()} ${d.getFullYear()}`)
    }
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
                    </Row>
                </Container>
            )
        }
        else {
            return (
                <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
                  {/* <NoData data={"No Franchise Selected "}/> */}
                </Container>
            )
        }
    }
    return (
        <>{main()}</>
    );
};

export default IndividFranchise;