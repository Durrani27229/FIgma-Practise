import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Banner2 = () => {
  return (
    <Container fluid className="bg-grey">
      <Container>
      <Row>
        <Col>
          <div className="banner2">
            <div>
              <p className="banner2-heading">500+</p>
              <p className="banner2-para">Satisfied Customer</p>
            </div>
            <div>
              <p className="banner2-heading">10+</p>
              <p className="banner2-para"> Years Experience</p>
            </div>
            <div>
              <p className="banner2-heading">20+</p>
              <p className="banner2-para"> Branch Office</p>
            </div>
            <div>
              <p className="banner2-heading">40+</p>
              <p className="banner2-para">Projects Completed</p>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default Banner2;
