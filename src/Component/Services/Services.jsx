import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../Mix/Section";

import { MdArrowOutward } from "react-icons/md";
import ServiceStrategy from "../Mix/ServiceStrategy";
import { FaCheckCircle } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

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
                  <div><p className="check-text"><FaCheckCircle className="check-icon" />  Strategic Approach</p></div>
                </div>
                <div>
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
      <Container>
        <Row className="mt-5">
          <Col>
            <div>
              <div>
              <p className="about-section-about">Our Team</p>
              </div>
              <div className="service-section-heading">
              <p>Meet Our</p>
              <p className="blue">Smart People</p>
              </div>
              <div>
              <p className="service-para">With a diverse range of expertise and commitment to excellence, our team is dedicated to delivering innovative marketing solutions that drive result Get to know the individuals behind our success</p>
              </div>
              <div>
              <button className='home-section1-btn2'>VIEW MORE</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="service-cart">
            <div>
              <img src="../../../public/team1.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Jonathan Andrew</p><p className="blue">CEO Zenith</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col>
          <Col>
          <div className="service-cart">
            <div>
              <img src="../../../public/team2.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Sarah Keili</p><p className="blue">Creative Director</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col>
          <Col>
          <div className="service-cart">
            <div>
              <img src="../../../public/team3.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Michael Smith</p><p className="blue">SMO Zenith</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col>
          <Col>
          <div className="service-cart">
            <div>
              <img src="../../../public/team4.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Martin Lee</p><p className="blue">Marketing Analytics</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col>
          <Col>
          <div className="service-cart">
            <div>
              <img src="../../../public/team5.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Jessica Wong</p><p className="blue">Content Marketing</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col>
          
        </Row>
      
      </Container>

    </Container>
  );
};

export default Services;
