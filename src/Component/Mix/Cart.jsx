import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiCheckCircle } from "react-icons/fi";

const Cart = () => {
  return (
    <Container>
        <Row>
          <Col>
            <div className="price-cart">
              <p className="price-cart-heading lh-1">Basic Plan</p>
              <p className="price-para">
                Ideal for startups and small businesses looking for affordable
                consulting services.
              </p>
              <div className="text-center">
                <span className="price-power">$</span>
                <span className="price-heading">49</span>
                <span className="price-base">/ Session</span>
              </div>
              <div>
                <button className="price-cart-btn">LEARN MORE</button>
              </div>
              <div className="price-content mt-3">
                <p>
                  <FiCheckCircle className="check-circle" /> Initial
                  consultation session to assess your needs and goals.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Customized
                  recommendations and actionable insights.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Limited support via
                  email or phone.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="price-cart">
              <p className="price-cart-heading lh-1">Standard Plan</p>
              <p className="price-para">
              Perfect for growing businesses in need of comprehensive consulting support.
              </p>
              <div className="text-center">
                <span className="price-power">$</span>
                <span className="price-heading">49</span>
                <span className="price-base">/ Session</span>
              </div>
              <div>
                <button className="price-cart-btn2">LEARN MORE</button>
              </div>
              <div className="price-content mt-3">
                <p>
                  <FiCheckCircle className="check-circle" /> Initial
                  consultation session to assess your needs and goals.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Customized
                  recommendations and actionable insights.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Limited support via
                  email or phone.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="price-cart">
              <p className="price-cart-heading lh-1">Premium Plan.</p>
              <p className="price-para">
              For established companies seeking strategic guidance and transformational solutions.
              </p>
              <div className="text-center">
                <span className="price-power">$</span>
                <span className="price-heading">69</span>
                <span className="price-base">/ Session</span>
              </div>
              <div>
                <button className="price-cart-btn">LEARN MORE</button>
              </div>
              <div className="price-content mt-3">
                <p>
                  <FiCheckCircle className="check-circle" /> Initial
                  consultation session to assess your needs and goals.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Customized
                  recommendations and actionable insights.
                </p>
                <p>
                  <FiCheckCircle className="check-circle" /> Limited support via
                  email or phone.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
          
          <p className="price-content text-center">
                Reach us for more details: <span className="blue">Contact Us</span>
          </p>
          </Col>
        </Row>
      </Container>
  )
}

export default Cart
