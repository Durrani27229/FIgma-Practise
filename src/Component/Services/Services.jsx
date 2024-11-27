import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../Mix/Section";

import { MdArrowOutward } from "react-icons/md";
import ServiceStrategy from "../Mix/ServiceStrategy";

import WhyChooseUs from "../Mix/WhyChooseUs";
import ServiceCart from "../Mix/ServiceCart";
import Customer from "../Mix/Customer";
import Footer from "../Footer/Footer";


const Services = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Section title="Services" />
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="service-main text-center">
              <p className="about-section-about">Strategic Planing</p>
              <p className="about-section-heading3">
                Mark <br /> Insights and Analysis
              </p>
              <p className="about-para">
                Help businesses improve their operations, achieve their goals,{" "}
                <br /> and stay competitive in today's.
              </p>
            </div>
          </Col>
        </Row>

        <ServiceStrategy />
      </Container>

      <WhyChooseUs />

      <ServiceCart />

      <Customer />

      <Footer />
      
    </Container>
  );
};

export default Services;
