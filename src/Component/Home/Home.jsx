import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='home-section1'>
                        <div className='home-main1'>
                            <div>
                                <img src="../../../public/strategize.png" height={37} width={224} />
                            </div>
                            <div className='mt-2'>
                                <p className='home-section1-heading fw-bold'>Driving Success Through Strategic Guidance.</p>
                            </div>
                            <div>
                                <p className='home-section1-para'>These services can be tailored to meet the specific needs and challenges of each client, providing valuable expertise and support to drive business success.</p>
                            </div>
                            <div>
                                <button className='home-section1-btn1'>CONTACT US</button>
                                <button className='home-section1-btn2 ms-4'>FREE CONSULT</button>
                            </div>
                            <div className='mt-3'>
                                <p>Follow Us On:</p>
                                <p><FiFacebook className='home-icon' /> <AiOutlineYoutube className='home-icon ms-2' /> <TbBrandTwitter className='home-icon ms-2' /> <FiLinkedin className='home-icon ms-2' /></p>

                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className='home-section1'>
                        <div className='home-main2'>
                            <div className='home-main2-inner'>
                                <img src="../../../public/home_main2.png" height={487} alt="" />
                            </div>
                            <div className='rating'>
                                <p className='mt-2'><FaStar className='star-icon' /> <FaStar className='star-icon' /> <FaStar className='star-icon' /> <FaStar className='star-icon' /> <FaStar /></p>
                                <p> <span className='rating-heading'>4/5</span> <span className='rating-para'>Rating</span></p>
                                <p className='rating-para'>From over 1500 reviews</p>
                            </div>
                            <div className='customers'>
                                <p className='customer-text'>Statisfied Customers</p>
                                <img src="../../../public/home_main2inner.png" width={166} height={49} alt="" />
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Home
