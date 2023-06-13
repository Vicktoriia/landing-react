import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Navigation = () => {
  const { i18n, t } = useTranslation();
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuExpanded(false);
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setMenuExpanded(false);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="--bs-primary-bg-subtle"
        variant="--bs-primary-bg-subtle"
        className="bg"
        expanded={menuExpanded}
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setMenuExpanded(!menuExpanded)}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <LinkContainer to="/aboutPage">
                <Nav.Link className="page-scroll" href="#about" onClick={() => setMenuExpanded(false)}>
                {t('Navigation.about')}
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/collection">
                <Nav.Link className="page-scroll" onClick={() => setMenuExpanded(false)}>
                  {t('Navigation.collection')}
                </Nav.Link>
              </LinkContainer>
              <NavDropdown
                className="page-scroll"
                title={t('Navigation.options')}
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/size">
                  <NavDropdown.Item className="page-scroll" onClick={() => setMenuExpanded(false)}>
                    {t('Navigation.sizing')}
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/materials">
                  <NavDropdown.Item className="page-scroll" onClick={() => setMenuExpanded(false)}>
                    {t('Navigation.materials')}
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/care">
                  <NavDropdown.Item className="page-scroll" onClick={() => setMenuExpanded(false)}>
                    {t('Navigation.care')}
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item className="page-scroll" href="#services" onClick={() => setMenuExpanded(false)}>
                  {t('Navigation.provocation')}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
               <Nav.Link onClick={handleContactClick} className="page-scroll">{t('Navigation.order')}
                </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={<i className="fa fa-light fa-globe"></i>}
                id="language-dropdown"
              >
                <NavDropdown.Item onClick={() => changeLanguage('ua')}>
                  ua
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
};

export default Navigation;
