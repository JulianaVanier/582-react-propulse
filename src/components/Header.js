import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';



function Header() {

  function goContact() {
    window.location.href = "/contact";
    // navigate(-1);
}
  return (
    <Navbar expand="lg" className="nav-bar" bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="#"><Image src="/assets/image/propulse-sportswear-high-resolution-logo-black-on-transparent-background.png" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">All Sports</Nav.Link>
            <Nav.Link href="#action2" onClick={ () => {goContact()}}>Contact</Nav.Link>
            <NavDropdown title="Kids" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                New Arrivals
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Footwear
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Men
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-control-sm me-2"
              aria-label="Search"
            />
            <Button className="btn-search" variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;