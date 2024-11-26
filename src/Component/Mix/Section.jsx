import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section = (props) => {
  return (
    <Container fluid>
        <Row>
          
                <div className='section'>
                    <div className='section-content'>{props.title}</div>
                    <div><p className='section-para'>Home / <span className='section-title'>{props.title}</span> </p></div>
                </div>
            
        </Row>
    </Container>
  )
}

export default Section
