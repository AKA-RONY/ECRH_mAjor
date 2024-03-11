import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ourmission">Our Mission </Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/theft">Theft</NavDropdown.Item>
              <NavDropdown.Item href="/assault"> Assault </NavDropdown.Item>
              <NavDropdown.Item href="/fraud">Fraud</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/drc">
                Drug-Related-Crimes
              </NavDropdown.Item>
              <NavDropdown.Item href="/vandalism">
                Vandalism
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">Go Home</Nav.Link>
            <Nav.Link eventKey={2} href="/FAQ">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;