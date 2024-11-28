import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdArrowOutward } from "react-icons/md";

const BlogCart = () => {
  return (
    <Container>
    <Row>
      <Col>
        <div className="blog-cart">
          <div className="blog-image1">
            <button className="blog-btn">Interactive Content</button>
          </div>
          <div className="blog-content">
            <p>Unlocking the Power of  Content Marketing: Strategies for Success</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div className="blog-cart">
          <div className="blog-image2">
            <button className="blog-btn">Digital Marketing</button>
          </div>
          <div className="blog-content">
            <p>Mastering Social Media: Tips and Tactics for Business Growth</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More  <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div className="blog-cart">
          <div className="blog-image3">
            <button className="blog-btn">Marketing Tool</button>
          </div>
          <div className="blog-content">
            <p>SEO Essentials: Boosting Your Website's Visibility and Rankings</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More  <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div className="blog-cart">
          <div className="blog-image4">
            <button className="blog-btn">Marketing Tool</button>
          </div>
          <div className="blog-content">
            <p>The Art of Email Marketing: Crafting Compelling Campaigns That Convert</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>


      <Col>
        <div className="blog-cart">
          <div className="blog-image5">
            <button className="blog-btn">Marketing Tools</button>
          </div>
          <div className="blog-content">
            <p>Harnessing the Influence: Strategies for Effective Influencer Marketing</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div className="blog-cart">
          <div className="blog-image6">
            <button className="blog-btn">Marketing Tools</button>
          </div>
          <div className="blog-content">
            <p>Beyond Borders: Expanding Your Reach with International Marketing</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>April 26,2024</p>
            </div>
            <div className="blog-link">
              <p>Read More <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>


    </Row>
  </Container>
  )
}

export default BlogCart
