import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../Mix/Section";
import Footer from "../Footer/Footer";

import Cart from "../Mix/Cart";
import Banner from "../Mix/Banner";
import Strategy from "../Mix/Strategy";
import Customer from "../Mix/Customer";

const Pricing = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Section title="Pricing Plan" />
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="service-main text-center">
              <p className="about-section-about">Pricing Planes</p>
              <p className="about-section-heading3">
                Pricing That Suits Your Needs.
              </p>
              <p className="about-para">
                Whether you're a startup on a tight budget or a multinational
                corporation looking <br /> for comprehensive support.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Cart />
      <Banner />
      <Strategy />
      <Customer />
      <Footer />
    </Container>
  );
};

export default Pricing;
