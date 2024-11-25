import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className='navbar-bg'>
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../../public/Logo.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-3 fs-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className='active navbar-hover'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='active navbar-hover'> About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className='active navbar-hover'> Services</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className='active navbar-hover'>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className='active navbar-hover' >Blogs</Nav.Link>
          </Nav>
            <Button variant="secondary" className='nav-btn ms-5'>Contact Us</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
