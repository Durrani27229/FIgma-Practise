import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaStar } from "react-icons/fa6";

const Customer = () => {
  return (
    <Container className="mt-5">
        <Row >
          <Col>
            <div className="d-flex flex-column justify-content-space-between">
              <p className="about-section-about">Testimonials</p>
              <p className="service-section-heading">
                What Our Customers Are Saying About Us?
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-end align-items-center gap-5">
              <div>
                <p className="service-section-heading text-center">500+</p>
                <p className="customer-para ">Satisfied Customers</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 pt-3  ">
                <p className="service-section-heading">4.99</p>
                <p className="customer-para">Overall Rating</p>
                <p className="customer-para ">
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-black" />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
          <Col >
            <div className="customer-review">
              <div className="customer-cart">
                <div className="d-flex gap-2 justify-content-center align-items-center customer-cart-head">
                  <div>
                    <img
                      src="../../../public/customer1.png"
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column mt-3  ">
                    <p className="lh-0 fw-bold">John Doe</p>
                    <p className="lh-0 blue">Designation</p>
                  </div>
                </div>

                <div>
                  <p>
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-black" />
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Their strategic insights and personalized approach have been
                  invaluable to our success. I highly recommend their services
                  to any business looking to take their tions
                </p>
              </div>
            </div>
          </Col>
          <Col >
            <div className="customer-review">
              <div className="customer-cart">
                <div className="d-flex gap-2 justify-content-center align-items-center customer-cart-head">
                  <div>
                    <img
                      src="../../../public/customer1.png"
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column mt-3  ">
                    <p className="lh-0 fw-bold">John Doe</p>
                    <p className="lh-0 blue">Designation</p>
                  </div>
                </div>

                <div>
                  <p>
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-black" />
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Their strategic insights and personalized approach have been
                  invaluable to our success. I highly recommend their services
                  to any business looking to take their tions
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="customer-review">
              <div className="customer-cart">
                <div className="d-flex gap-2 justify-content-center align-items-center customer-cart-head">
                  <div>
                    <img
                      src="../../../public/customer1.png"
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column mt-3  ">
                    <p className="lh-0 fw-bold">John Doe</p>
                    <p className="lh-0 blue">Designation</p>
                  </div>
                </div>

                <div>
                  <p>
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-black" />
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Their strategic insights and personalized approach have been
                  invaluable to our success. I highly recommend their services
                  to any business looking to take their tions
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default Customer
