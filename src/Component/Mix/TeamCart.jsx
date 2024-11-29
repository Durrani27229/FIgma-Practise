import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const TeamCart = () => {
  return (
    <Container>
        <Row className="mt-5">
          
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
          <Col className="mt-3">
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
          <Col className="mt-3">
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
          <Col className="mt-3">
          <div className="service-cart">
            <div>
              <img src="../../../public/team5.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Jessica Wong</p><p className="blue">Content Marketing</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col >
          <Col className="mt-3">
          <div className="service-cart">
            <div>
              <img src="../../../public/teamcart6.png" className="img-fluid" alt="" />
            </div>
            <div className="service-cart-content">
              <div className="service-cart-detail mt-3"><p className="service-cart-name">Jessica Wong</p><p className="blue">Content Marketing</p></div>
              <div className="services-cart-icons"><p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p></div>
            </div>
            </div>
          </Col >
          
        </Row>
      
      </Container>
  )
}

export default TeamCart
