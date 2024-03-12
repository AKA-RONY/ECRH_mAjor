// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';




// function Title() {

//   return (
//   <div style={{ textAlign: 'center' }}>
//   <h1>E-Crime Report Hub: Online FIR Filing and Case
//   Management System</h1>
//   </div>)
//   ;
// }




// function CollapsibleExample() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/ourmission">Our Mission </Nav.Link>
//             <Nav.Link href="/aboutus">About Us</Nav.Link>
//             <NavDropdown title="Categories" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="/Theft">Theft</NavDropdown.Item>
//               <NavDropdown.Item href="/Assault"> Assault </NavDropdown.Item>
//               <NavDropdown.Item href="/Fraud">Fraud</NavDropdown.Item>
//               {/* <NavDropdown.Divider /> */}
//               <NavDropdown.Item href="/DrugRelatedCrimes">
//                 Drug-Related-Crimes
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Vandalism">
//                 Vandalism
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="/">Go Home</Nav.Link>
//             <Nav.Link eventKey={2} href="/FAQ">
//               FAQ
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );

//   }

// export default CollapsibleExample;





import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>E-Crime Report Hub: Online FIR Filing and Case Management System</h1>
    </div>
  );
}

function CollapsibleExample() {
  return (
    <>
      <Title />
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/ourmission">Our Mission</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/Theft">Theft</NavDropdown.Item>
                <NavDropdown.Item href="/Assault">Assault</NavDropdown.Item>
                <NavDropdown.Item href="/Fraud">Fraud</NavDropdown.Item>
                <NavDropdown.Item href="/DrugRelatedCrimes">
                  Drug-Related Crimes
                </NavDropdown.Item>
                <NavDropdown.Item href="/Vandalism">Vandalism</NavDropdown.Item>
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
    </>
  );
}

export default CollapsibleExample;
