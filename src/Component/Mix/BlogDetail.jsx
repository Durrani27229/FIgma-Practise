import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Section from "./Section";
import Col from "react-bootstrap/esm/Col";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import { MdArrowOutward } from "react-icons/md";


const blogData = [
    {
      id: 1,
      title: 'Mastering Social Media: Tips and Tactics for Business Growth',
      date: 'April 26,2024',
      img: '../../../public/blog2.png',
      btnTitle: 'Digital Marketing',
    },
    {
      id: 2,
      title: "SEO Essentials: Boosting Your Website's Visibility and Rankings",
      date: 'April 26,2024',
      img: '../../../public/blog3.png',
      btnTitle: 'Marketing Tools',
    },
    {
      id: 3,
      title: 'The Art of Email Marketing: Crafting Compelling Campaigns That Convert',
      date: 'April 26,2024',
      img: '../../../public/blog4.png',
      btnTitle: 'Marketing Tools',
    },
    {
      id: 4,
      title: 'Harnessing the Influence: Strategies for Effective Influencer Marketing',
      date: 'April 26,2024',
      img: '../../../public/blog5.png',
      btnTitle: 'Marketing Tools',
    },
    {
      id: 5,
      title: 'Beyond Borders: Expanding Your Reach with International Marketing',
      date: 'April 26,2024',
      img: '../../../public/blog6.png',
      btnTitle: 'Interactive Content',
    }
  
  ]

  console.log(blogData);
const BlogDetail = () => {
    return (
        <Container fluid>
            <Section title="Blog Detail" />
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
                            <div className="blog-heading mt-3">
                                <p>The Art of Email Marketing: Crafting Compelling Campaigns That Convert</p>
                            </div>
                            <div>
                                <p>
                                    In today's digital age, where attention spans are fleeting and competition for consumer engagement is fierce, mastering the art of email marketing is essential for businesses seeking to connect with their audience, drive conversions, and foster long-term relationships.
                                </p>

                                <p>
                                    From captivating subject lines to persuasive copywriting and irresistible calls-to-action, the art of email marketing encompasses a myriad of strategies and techniques designed to captivate, engage, and convert recipients. Let's explore how you can harness the power of email marketing to craft compelling campaigns that deliver results. </p>

                                <p>1. Know Your Audience: Understanding your audience is the cornerstone of effective email marketing. Take the time to segment your email list based on demographics, interests, purchasing behavior, and engagement level. Tailor your messaging and content to resonate with each segment, ensuring relevance and personalization that drives engagement and conversions.</p>

                                <p>2. Craft Captivating Subject Lines: The subject line is your email's first impression and a crucial factor in determining whether it gets opened or ignored. Craft subject lines that are attention-grabbing, concise, and compelling. Use personalization, urgency, curiosity, or offers to entice recipients to open your email and discover what's inside.</p>

                                <p>3. Engage with Compelling Content: Once you've captured your audience's attention, keep them engaged with valuable and relevant content. Whether it's informative articles, product updates, exclusive offers, or entertaining stories, ensure your content provides value and resonates with your audience's interests and needs.</p>

                                <p>By mastering the art of email marketing and crafting compelling campaigns that resonate with your audience, you can drive engagement, nurture relationships, and ultimately, achieve your business goals.
                                </p>
                            </div>

                            <div className="blog-main">
                                <div>
                                    <img src="../../../public/blogMan.png" width={100} height={100} alt="" />
                                </div>
                                <div>
                                    <p className="blog-name lh-1">John Doe / Author</p>
                                    <p className="blog-para">Greetings, readers! I'm thrilled to introduce myself as your dedicated news author, I’m Khaleed, here to provide you with timely, insightful, and comprehensive coverage of the latest events and developments shaping our world.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="case-carts">
                            <div className="blog-detail-cart">
                                <div><p className="archive">Archives</p></div>
                                <div className="archieve-cart">
                                    {
                                        blogData.map((value,index) => {
                                            return (
                                                <div className="archieve-content">
                                        <div className="arch-img">
                                            <img src={value.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="arch-inner">
                                            <p className="arch-para" >{value.title}</p>
                                            <p className="arch-read">{value.date}</p>
                                        </div>
                                    </div>
                                            )
                                        })
                                    }
                                    
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

                           

                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Container>
    );
};

export default BlogDetail;
