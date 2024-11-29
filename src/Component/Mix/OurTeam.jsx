import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from './Section';
import TeamCart from './TeamCart';
import Banner from './Banner';
import Strategy from './Strategy';
import Footer from '../Footer/Footer';



const OurTeam = () => {
    
  return (
    <Container fluid>
    <Section title="Our Team" />

    <Container>
        <Row>
          <Col>
            <div className="service-main text-center">
              <p className="about-section-about">Our Team</p>
              <p className="about-section-heading3">Meet Our <span className='blue'>Smart People</span></p>
              <p className="about-para">
              With a diverse range of expertise and commitment to excellence, our team is dedicated to delivering innovative marketing <br /> solutions that drive result Get to know the individuals behind our success
              </p>
              <div className='text-center mt-5'>
                <button className='home-section1-btn2'>VIEW ALL</button>
                </div>
            </div>
          </Col>
        </Row>
        
      </Container>

        <TeamCart />
        <Banner />
        <Strategy />
        <Footer />



      </Container>

  )
}

export default OurTeam
