import React from "react";
import Section from "../Mix/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogCart from "../Mix/BlogCart";
import Footer from "../Footer/Footer";

const blogData = [
  {
    id: 1,
    title: 'Unlocking the Power of  Content Marketing: Strategies for Success',
    date: 'April 26,2024',
    img: 'blog-image1',
    btnTitle: 'Interactive Content',
  },
  {
    id: 2,
    title: 'Mastering Social Media: Tips and Tactics for Business Growth',
    date: 'April 26,2024',
    img: 'blog-image2',
    btnTitle: 'Digital Marketing',
  },
  {
    id: 3,
    title: "SEO Essentials: Boosting Your Website's Visibility and Rankings",
    date: 'April 26,2024',
    img: 'blog-image3',
    btnTitle: 'Marketing Tools',
  },
  {
    id: 4,
    title: 'The Art of Email Marketing: Crafting Compelling Campaigns That Convert',
    date: 'April 26,2024',
    img: 'blog-image4',
    btnTitle: 'Marketing Tools',
  },
  {
    id: 5,
    title: 'Harnessing the Influence: Strategies for Effective Influencer Marketing',
    date: 'April 26,2024',
    img: 'blog-image5',
    btnTitle: 'Marketing Tools',
  },
  {
    id: 6,
    title: 'Beyond Borders: Expanding Your Reach with International Marketing',
    date: 'April 26,2024',
    img: 'blog-image6',
    btnTitle: 'Interactive Content',
  }

]


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

      <Container>
        <Row>
        {blogData.map((value,index)=>{
          return (<BlogCart value={value} />)
      })}
        </Row>
      </Container>

    {/* <BlogCart /> */}

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
