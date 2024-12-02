import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Section from "./Section";
import Col from "react-bootstrap/esm/Col";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Common = () => {
    return (
        <Container fluid>
            <Section title="Case Detail" />
            <Container className="mt-5">
                <Row>
                    <Col sm={8}>
                        <div className="common">
                            <div className="common-head">
                                <p>Common Question</p>
                            </div>
                            <div className="common-div-blue">
                                <p className="common-text-white">What is Business Consulting and What Services Do Consultants Provide?</p>
                                <p><IoIosArrowUp className="arrow-icon" /></p>
                            </div>
                            <div>
                            <p className="common-para">This question seeks to understand the role and scope of business consulting. Consultants typically offer a range of services including strategic planning, organizational development, operational improvement, financial analysis, and market research, among others.</p>
                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">When Should a Company Consider Hiring a Business Consultant?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">How Do Business Consultants Approach Problem-Solving?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">What Are the Benefits of Hiring a Business Consultant?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">How Do Business Consultants Measure Success?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">What Factors Should Companies When Choosing a Business Consulting Firm?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>


                        <div className="common-head">
                                <p>Pricing Question</p>
                            </div>
                            <div className="common-div-blue">
                                <p className="common-text-white">What Factors Influence the Pricing of Business Consulting Services?</p>
                                <p><IoIosArrowUp className="arrow-icon" /></p>
                            </div>
                            <div>
                            <p className="common-para">Consultants may consider factors such as the scope and complexity of the project, the level of expertise required, the duration of engagement, the consultant's reputation and experience, and the value delivered to the client.</p>
                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">What Pricing Models Do Business Consulting Firms Typically Offer?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">How Do Business Consultants Approach Problem-Solving?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">Are There Any Additional Costs or Fees Beyond the Base Consulting Rate?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">Can Business Consulting Fees Be Negotiated?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                        <div className="common-div-white">
                            <p className="common-text-blue">How Do Companies Evaluate the ROI of Business Consulting Services?</p>
                            <p><IoIosArrowUp className="arrow-icon-blue" /></p>

                        </div>
                    </div>
                        
                    </Col>
                    <Col sm={4}>
                        <div className="case-carts">
                            <div className="case-cart1">
                                <div>
                                    <p className="case-head text-center">Other Services</p>
                                </div>
                                <div className="service-inner align-items-center">
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                    <div>
                                        <p>Market Research and Analysis<MdArrowOutward className="about-arrow" /></p>
                                    </div>
                                </div>

                            </div>

                            <div className="banner-cart">
                                <div className='banner-head'>
                                    <p>Request a Customized <br /> Solution For Your<br /> Business</p>
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

export default Common;
