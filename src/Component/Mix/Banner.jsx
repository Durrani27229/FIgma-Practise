import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return (
   <Container className='mt-5'>
    <Row>
        <Col>
            <div className='banner text-center'>
                    <div className='banner-heading'>
                        <p>Request a Customized <br/> Solution For Your Business</p>
                    </div>
                    <div>
                        <p className='banner-para'>Every business is unique. Request a tailored solution crafted <br />specifically for your  organization's challenges and goals.</p>
                    </div>
                    <div>
                <button className="price-cart-btn2">LEARN MORE</button>
              </div>
            </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Banner
