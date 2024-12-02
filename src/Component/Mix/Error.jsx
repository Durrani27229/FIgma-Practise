import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Error = () => {
    return (
        <>
        <Container className="mt-5">
            <Row>
                <Col>
                <div className="error">
            <div className="error-image">
                <img src="../../../public/error.png" className="img-fluid" alt="" />
            </div>
            <div>
            <button className='home-section1-btn1'>BACK TO HOME</button>
            </div>
        </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
        
    );
};

export default Error;