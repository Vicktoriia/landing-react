import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="--bs-primary-bg-subtle"
        variant="--bs-primary-bg-subtle"
        className="bg"
      >
        <Container>
          <Navbar.Brand href="#page-top" to="/" end="true">
            <img
              alt=""
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <span className="navbar-logo">Vitrylo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="mx-auto my-2 my-lg-0"
              // style={{ maxHeight: '110px' }}
              navbarScroll
            >
              <Nav.Link className="page-scroll" href="#about">
                Про нас
              </Nav.Link>
              <Nav.Link className="page-scroll" href="#gellery">
                Галерея
              </Nav.Link>
              <NavDropdown
                className="page-scroll"
                title="Опції"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="page-scroll" href="/collection">
                  Колекція
                </NavDropdown.Item>
                <NavDropdown.Item className="page-scroll" href="#services">
                  Розмірність
                </NavDropdown.Item>
                <NavDropdown.Item className="page-scroll" href="#services">
                  Матеріали
                </NavDropdown.Item>
                <NavDropdown.Item className="page-scroll" href="/care">
                  Догляд
                </NavDropdown.Item>
                <NavDropdown.Item className="page-scroll" href="#services">
                  Провокація
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="page-scroll" href="#contact">
                Замовити
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Navigation;
