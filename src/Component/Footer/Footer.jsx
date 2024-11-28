import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="mt-5"> 
        <Col>
          <div className="footer">
            <div className="footer-logo gap-2">
              <div>
                <img
                  src="../../../public/Logo.png"
                  width="131"
                  height="48"
                  alt=""
                />
              </div>

             <div>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                maxime aliquam molestias adipisci obcaecati itaque mollitia
                enim, ipsa odio amet?
              </p>
             </div>
              <div>
                <p className="lh-0">Follow Us On:</p>
                <p className="lh-0">
                  <FiFacebook className="home-icon" />{" "}
                  <AiOutlineYoutube className="home-icon ms-2" />{" "}
                  <TbBrandTwitter className="home-icon ms-2" />{" "}
                  <FiLinkedin className="home-icon ms-2" />
                </p>
              </div>
            </div>
            <div className="footer-company">
              <div>
                <p className="footer-heading">Company</p>
              </div>
              <div className="footer-content lh-1">
                <p>Home</p>
                <p>About Us</p>
                <p>Our Team</p>
                <p>Services</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
              </div>
            </div>



            <div className="footer-services">
            <div>
                <p className="footer-heading">Services</p>
              </div>
              <div className="footer-content lh-1">
                <p>Strategic Planning Services</p>
                <p>Market Research and Analysis</p>
                <p>Financial Consulting</p>
                <p>Operations Improvement</p>
                <p>Organizational Development</p>
                <p>Change Management</p>
              </div>
            </div>


            <div className="footer-form">
            <div>
                <p className="footer-heading">Subscribe News Letter</p>
              </div>
              <div>
                <p>Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>
                
               
              
              </div>
              <div>
              <input type="text" className="inp" placeholder="Email..." />
              </div>
              <div>
              <button className='footer-btn'>Subscribe</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
