import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Logos = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div className='logos-section'>
                    <div><img src="../../../public/Logo1.png" width={198} height={46} alt="" /></div>
                    <div><img src="../../../public/Logo2.png" width={198} height={46} alt="" /></div>
                    <div><img src="../../../public/Logo3.png" width={198} height={46} alt="" /></div>
                    <div><img src="../../../public/Logo1.png" width={198} height={46} alt="" /></div>
                    <div><img src="../../../public/Logo4.png" width={198} height={46} alt="" /></div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Logos
