import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdArrowOutward } from "react-icons/md";




const BlogCart = ({value}) => {
// console.log(value,'value');



  return (
    
      <Col>
        <div className="blog-cart">
            <div className={value.img}>
              <button className="blog-btn">{value.btnTitle}</button>
            </div>
          <div className="blog-content">
            <p>{value.title}</p>
          </div>
          <div className="blog-end">
            <div className="blog-date">
              <p>{value.date}</p>
            </div>
            <div className="blog-link">
              <p>Read More <MdArrowOutward className="about-arrow"/></p>
            </div>
          </div>
        </div>
      </Col>

      


 
  )
}

export default BlogCart
