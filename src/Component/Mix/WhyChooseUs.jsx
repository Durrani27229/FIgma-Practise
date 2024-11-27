import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
   <Container>
   <Row className="mt-5">
    <Col>
        <div className="mt-5">
          <p className="about-section-about">Why Choose Us</p>
          <p className="about-section-heading3">We Can Help You To Grow <span className="blue">Your Business</span> </p>
          <p className="service-para">When you choose Zenith, you're not just hiring a consulting firm – you're partnering with a team of dedicated professionals who are invested in your success.</p>
          <div className="services-check">
          <div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
          </div>
          <div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
            <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
          
          </div>
          </div>
        </div>
        <div className="mt-4">
        <button className='home-section1-btn1'>READ MORE</button>
        </div>
    </Col>
    <Col>
      <div className="service-i">
      <div className="service-img">
          <img src="../../../public/service.png" className="img-fluid" alt="" />
      </div>
      </div>
    </Col>
  </Row>
  </Container>
  )
}

export default WhyChooseUs
