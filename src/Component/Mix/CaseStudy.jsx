import React from 'react'
import Section from "../Mix/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CaseStudyCart from './CaseStudyCart';
import Strategy from './Strategy';
import Customer from './Customer';
import Banner from './Banner';
import Footer from '../Footer/Footer';


const CaseStudy = () => {
  return (
    <Container fluid>
    <Section title="Case Study" />

    <Container>
        <Row>
          <Col>
            <div className="service-main text-center">
              <p className="about-section-about">Case Studies</p>
              <p className="about-section-heading3">Learn From Our Case Studies</p>
              <p className="about-para">
              Each case study is a testament to our commitment to delivering measurable <br /> results and driving tangible value for our clients.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <CaseStudyCart />

      

      <Container className="mt-5">
      <Row>
        <Col>
        <div className="text-center">
        <button className='blog-view-all'>View All</button>
        </div>
        </Col>
      </Row>
    </Container>   

    <Customer />

    <Banner />

    <Footer />

    </Container>

  )
}

export default CaseStudy
