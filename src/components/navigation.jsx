import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="--bs-primary-bg-subtle"
      variant="--bs-primary-bg-subtle"
      className="bg"
    >
      <Container fluid>
        <Navbar.Brand href="#page-top">
          <img
            alt=""
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Vitrylo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '110px' }}
            navbarScroll
          >
            <Nav.Link className="page-scroll" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="page-scroll" href="#gellery">
              Gallery
            </Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="page-scroll" href="#contact">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
