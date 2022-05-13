import { Container,Row,Col,Card } from "react-bootstrap";
import MiniWidgetsC from "./miniWidgetsC";
import { FaUsers } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import CustomerAnalytics from "./customerAnalytics";
import CustomerDoughnut from "./customerDoughnut";
import CustomerTable from './customerTable';

const CustomerDashboard=(props)=>{
    const reports = [
        { icon: FaUsers, title: "Total Customers", value: "12577", rate: "2.7%", desc: "From previous period" },
        { icon: MdFastfood, title: "Total Orders", value: "13676797", rate: "2.4%", desc: "From previous period" },

    ]
    return(
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <Row>
            <Col className="dash-head">CUSTOMER</Col>
        </Row>

        <Row >
            <Col lg="8">
                <Row>
                    <MiniWidgetsC reports={reports} />
                </Row>

                <CustomerAnalytics />
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%', boxShadow: " 0 2px 4px rgb(0 0 0 / 8%)" }}>
                    <Card.Body>
                        <CustomerDoughnut></CustomerDoughnut>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
        <Row className="mt-4">
        <CustomerTable  products={props.products} currentCustomer={props.currentCustomer} setCustomer={props.setCustomer}/>
        </Row>
        
    </Container>
    )
}
export default CustomerDashboard;