import React from 'react';
import { Container } from 'react-bootstrap';

const AddPermissions = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
          HELLO PERMISSION
        </Container>
    );
};

export default AddPermissions;