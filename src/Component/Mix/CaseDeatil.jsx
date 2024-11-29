import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Section from "./Section";
import Col from "react-bootstrap/esm/Col";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

const CaseDeatil = () => {
  return (
    <Container fluid>
      <Section title="Case Detail" />
      <Container className="mt-5">
        <Row>
          <Col sm={8}>
            <div className="case-detail">
              <div className="case-image">
                <img
                  src="../../../public/case.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="case-heading mt-3">
                <p>Client: XYZ Tech Solutions</p>
              </div>
              <div>
                <p>
                  In today's competitive manufacturing landscape, companies face
                  numerous challenges,
                  <br /> 
                  including operational inefficiencies, technological
                  disruptions, and global market dynamics.
                  <br /> 
                  Manufacturing business consulting offers tailored
                  solutions to address these challenges, enabling <br />
                  companies to
                  optimize operations, enhance productivity, and drive
                  innovation. Let's explore how <br /> 
                  manufacturing business
                  consulting firms partner with companies to unlock their full
                  potential and <br /> achieve sustainable growth.
                   Challenge: <br />

                  ABC Manufacturing faced inefficiencies in its production
                  processes, leading to increased costs <br />
                   and longer lead times.<br />
                
                  Consulting Solution: 
                  A business consulting team conducted a
                  thorough analysis of ABC Manufacturing's <br />
                  manufacturing
                  processes, identifying bottlenecks and areas for improvement.
                  They implemented <br />
                  lean manufacturing principles and process
                  automation technologies to streamline production,<br />
                   reduce
                  waste, and improve overall efficiency.<br />
                   Outcome: <br />
                   With the
                  optimization of its manufacturing processes, ABC Manufacturing
                  achieved significant<br />
                   cost savings, reduced lead times, and
                  increased production capacity, allowing them to meet<br />
                   customer
                  demand more effectively while maintaining competitive pricing.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="case-carts">
                <div className="case-cart1">
                    <div>
                        <p className="case-head">Case Detail</p>
                    </div>
                    <div className="cart1-inner">
                        <div className="inner1">
                            <p className="case-para">Client:</p>
                            <p className="case-para2">ABC <br /> Manufacturing</p>
                        </div>
                        <div className="inner2">
                            <p className="case-para">Date:</p>
                            <p className="case-para2">April 1,2024</p>
                        </div>
                    </div>
                    <div className="cart1-inner mt-3">
                        <div className="inner1">
                            <p className="case-para">Location</p>
                            <p className="case-para2">Jakarta,Indonesia</p>
                        </div>
                        <div className="inner2">
                            <p className="case-para">Consultant:</p>
                            <p className="case-para2">Potential Company</p>
                        </div>
                    </div>
                    <div>
                        <p className="case-para">Website</p>
                        <p className="case-para2">https://www.abcmanufacturing.com </p>
                    </div>
                </div>

                <div className="banner-cart">
                <div className='banner-head'>
                        <p>Request a Customized <br/> Solution For Your<br /> Business</p>
                    </div>
                    <div>
                        <p className='banner-content'>Every business is unique. Request a tailored solution crafted specifically for your  organization's challenges and goals.</p>
                    </div>
                    <div>
                         <button className="banner-btn">CONTACT US</button>
                 </div>    
                </div> 

                <div className="banner-form">
                    <label htmlFor="username" className="form-user">Name *</label>
                    <input type="text" placeholder="Your Name" className="banner-inp" />
                    <label htmlFor="useremail" className="form-user">Email *</label>
                    <input type="text" placeholder="Your Name" className="banner-inp" />
                    <label htmlFor="service" className="form-user">Services *</label>
                    <input type="text" placeholder="Your Name" className="banner-inp" />
                    <label htmlFor="message" className="form-user">Message</label>
                    <textarea name="message" >Message</textarea>
                    <div className="mt-3">
              <button className='footer-btn'>Register</button>
              </div>
                </div>

            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Container>
  );
};

export default CaseDeatil;
