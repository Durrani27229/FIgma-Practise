import React from "react";
import Section from "../Mix/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogCart from "../Mix/BlogCart";
import Footer from "../Footer/Footer";


const Blogs = () => {
  // const blogCart = [
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog1.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog2.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog2.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog2.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog2.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  //   {
  //     button: "Interactive Content",
  //     img: "../../../public/blog2.png",
  //     title:
  //       "Unlocking the Power of  Content Marketing: Strategies for Success",
  //     date: "April 26,2024",
  //     link: "Read More",
  //   },
  // ];
  // console.log(blogCart);
  {/* {blogCart.map((item, value) => {
                // console.log(item,'item',value,'value');
                return (
                  <>
                    <div className="blog-image">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="blog-content">
                      <p>{item.title}</p>
                    </div>
                    <div className="d-flex justify-content-space-between">
                      <div className="blog-date">{item.date}</div>
                      <div className="blog-link">{item.link}</div>
                    </div>
                  </>
                );
              })} */}

  return (
    <Container fluid>
      <Row>
        <Col>
          <Section title="Blogs" />
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="service-main text-center">
              <p className="about-section-about">Blogs</p>
              <p className="about-section-heading3">Recent Articles & News</p>
              <p className="about-para">
                Our blog is your go-to resource for staying updated on the
                latest trends, best <br /> practices, and actionable advice
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    <BlogCart />

    <Container className="mt-5">
      <Row>
        <Col>
        <div className="text-center">
        <button className='blog-view-all'>View All Post</button>
        </div>
        </Col>
      </Row>
    </Container>
     
    <Footer />

    </Container>
  );
};

export default Blogs;
