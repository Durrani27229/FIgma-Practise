import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdArrowOutward } from "react-icons/md";

const Strategy = () => {
  return (
    <div>
       <Container>
       <Row>
          <Col>
            <div className="about-content">
              <div className="ab-1">
                <div>
                  <p className="about-section-about">Strategic Planing</p>
                </div>
                <div>
                  <p className="about-section-heading3">
                    Mark <br /> Insights and Analysis
                  </p>
                </div>
                <div>
                  <p className="about-para">
                    Help businesses improve their operations, achieve their
                    goals, and stay competitive in today's.
                  </p>
                </div>
                <div className="mt-5">
                  <button className="home-section1-btn2">VIEW MORE</button>
                </div>
              </div>

              <div className="ab-2">
                <img src="../../../public/strategy1.png" width={56} height={55} alt="" />
                <p className="strategy-heading">Strategic Planning Services</p>
                <p className="grey">Business consultants can assist clients in developing long-term strategic plans to achieve their goals</p>
                <p className="blue">Learn More <MdArrowOutward className="about-arrow"/></p>
              </div>

              <div className="ab-2">
                <img src="../../../public/strategy2.png" width={56} height={55} alt="" />
                <p className="strategy-heading">Market Research & Analysis</p>
                <p className="grey">Conduct thorough market research to provide insights into market trends, customer behaviors, and others</p>
                <p className="blue">Learn More <MdArrowOutward className="about-arrow"  /></p>
              </div>
            </div>
          </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Strategy
