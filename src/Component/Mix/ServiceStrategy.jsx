import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { MdArrowOutward } from "react-icons/md";




const ServiceStrategy = () => {
  return (
    <Container>
      <Row>
          <Col>
            <div className="service-strategy">
              <div className="ab-2">
                <img
                  src="../../../public/strategy1.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Strategic Planning Services</p>
                <p className="grey">
                  Business consultants can assist clients in
                  <br /> developing long-term strategic plans to achieve their
                  goals
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
              <div className="ab-2">
                <img
                  src="../../../public/strategy2.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Market Research & Analysis</p>
                <p className="grey">
                  Conduct thorough market research to provide insights into
                  market trends, customer behaviors, and others
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
              <div className="ab-2">
                <img
                  src="../../../public/strategy2.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Financial Consulting</p>
                <p className="grey">
                  Financial analysis, budgeting, forecasting, and investment
                  advice to help businesses optimize their financial.
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
            <div className="service-strategy mt-5">
              <div className="ab-2">
                <img
                  src="../../../public/strategy1.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Strategic Planning Services</p>
                <p className="grey">
                  Business consultants can assist clients in
                  <br /> developing long-term strategic plans to achieve their
                  goals
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
              <div className="ab-2">
                <img
                  src="../../../public/strategy2.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Market Research & Analysis</p>
                <p className="grey">
                  Conduct thorough market research to provide insights into
                  market trends, customer behaviors, and others
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
              <div className="ab-2">
                <img
                  src="../../../public/strategy2.png"
                  width={56}
                  height={55}
                  alt=""
                />
                <p className="strategy-heading">Financial Consulting</p>
                <p className="grey">
                  Financial analysis, budgeting, forecasting, and investment
                  advice to help businesses optimize their financial.
                </p>
                <p className="blue hover">
                  Learn More <MdArrowOutward className="about-arrow" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default ServiceStrategy
