import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../Mix/Section";
import { MdArrowOutward } from "react-icons/md";
import Logos from "../Mix/Logos";
import Strategy from "../Mix/Strategy";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Section title="About Us" />
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="about-section">
              <div className="about-section-img">
                <img
                  src="../../../public/about-section.png"
                  height={570}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="about-section">
              <div>
                <p className="about-section-about">About Us</p>
              </div>
              <div>
                <p className="about-section-heading">Your Trusted </p>
                <p className="about-section-heading">
                  Advisors in{" "}
                  <span className="about-section-heading2">
                    {" "}
                    Business Success.{" "}
                  </span>
                </p>
              </div>
              <div>
                <p className="about-para">
                  We understand the challenges and complexities that businesses
                  face in today's dynamic marketplace. That's why we offer a
                  comprehensive suite of consulting services.
                </p>
                <p className="about-para">
                  Founded on the principles of innovation, integrity, and
                  excellence, we are a team of seasoned professionals.
                </p>
              </div>
              <div className="mt-3">
                <button className="home-section1-btn1">READ MORE</button>
              </div>
              <hr />
              <div className="about-section-three-cart mt-3">
                <div>
                  <p className="about-section-cart-heading">500+</p>
                  <p className="about-para">Satisfied Customer</p>
                </div>
                <div>
                  <p className="about-section-cart-heading">10+</p>
                  <p className="about-para"> Years Experience</p>
                </div>
                <div>
                  <p className="about-section-cart-heading">40+</p>
                  <p className="about-para">Projects Completed</p>
                </div>
              </div>
              <div></div>
            </div>
          </Col>
        </Row>

       <Strategy />
        
      </Container>
      <Logos />
    </Container>
  );
};

export default About;
