import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
              />
              <span className="navbar-logo">Vitrylo</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link className="page-scroll" href="#about">Про нас</Nav.Link>
                <Nav.Link className="page-scroll" href="#gellery">Галерея</Nav.Link>
              <NavDropdown
                className="page-scroll"
                title="Опції"
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/collection">
                  <NavDropdown.Item className="page-scroll">
                    Колекція
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/size">
                <NavDropdown.Item className="page-scroll">
                  Розмірність
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/materials">
                <NavDropdown.Item className="page-scroll">
                  Матеріали
                  </NavDropdown.Item>
                  </LinkContainer>
                <LinkContainer to="/care">
                  <NavDropdown.Item className="page-scroll">
                    Догляд
                  </NavDropdown.Item>
                </LinkContainer>
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
            <Nav>
              <NavDropdown
                title={<i className="fa fa-light fa-globe"></i>}
                id="language-dropdown"
              >
                <NavDropdown.Item onClick={() => changeLanguage('uk')}>
                  uk
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  en
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('de')}>
                  de
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
