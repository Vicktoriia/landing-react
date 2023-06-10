import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigate = (props) => {
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
                <Nav.Link className="page-scroll" href="#about">{props.data ? props.data.about : 'Loading'}</Nav.Link>
                <Nav.Link className="page-scroll" href="#gellery">{props.data ? props.data.gallery : 'Loading'}</Nav.Link>
              <NavDropdown
                className="page-scroll"
                title={props.data ? props.data.options : 'Loading'}
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/collection">
                  <NavDropdown.Item className="page-scroll">
                    {props.data ? props.data.collection : 'Loading'}
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/size">
                <NavDropdown.Item className="page-scroll">
                  {props.data ? props.data.sizing : 'Loading'}
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/materials">
                <NavDropdown.Item className="page-scroll">
                  {props.data ? props.data.materials : 'Loading'}
                  </NavDropdown.Item>
                  </LinkContainer>
                <LinkContainer to="/care">
                  <NavDropdown.Item className="page-scroll">
                    {props.data ? props.data.care : 'Loading'}
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item className="page-scroll" href="#services">
                  {props.data ? props.data.provocation : 'Loading'}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="page-scroll" href="#contact">
                {props.data ? props.data.order : 'Loading'}
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

export default Navigate;
