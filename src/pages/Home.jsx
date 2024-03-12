// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';

// function Home() {

//   const navigate = useNavigate(); 
// function register(){
//   navigate("/Registration")
// }

//   return (
//     <div>
//     <div className='con1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65vh', justifyContent: 'center' }}>

//       <Link to="/Registration">
//       <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Register</Button>
//      </Link>
//       <Link to={"/Login"}> 
//       <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Login</Button>
//       </Link>

//       <Link to={"/QuickFIR"}>
//       <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Quick FIR</Button>
//       </Link>
//     </div>

//      function TextExample() {
//   const openGoogleMap = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };
//     <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingBottom:"5px" ,margin: '2px', height :"150px" }}>
//       <Card style={{ width: '400px' }}>
//         <Card.Body>
//         <Card.Title style={{ textAlign: 'center' }}>REACH US VIA </Card.Title>
//           {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
//           <Card.Text>
//             Emergency contact number : +91 9085736245 <br/>
//             Email us : <Card.Link href="#">help.ecrhsupport@gmail.com</Card.Link><br/>
//             Police Station Near me : <Card.Link href="#" onClick={openGoogleMap}> [Google Map]:</Card.Link>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//     <footer style={{ position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
//           <p>&copy; 2024 E-Crime Report Hub</p>
//       </footer>
//     </div>
//   );
// }








// export default Home;





import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function TextExample() {
  const openGoogleMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingBottom:"5px" ,margin: '2px', height :"150px" }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>REACH US VIA </Card.Title>
          <Card.Text>
            Emergency contact number : +91 9085736245 <br/>
            Email us : <Card.Link href="#">help.ecrhsupport@gmail.com</Card.Link><br/>
            Police Station Near me : <Card.Link href="#" onClick={openGoogleMap}> [Google Map]</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function Home() {
  const navigate = useNavigate(); 

  function register() {
    navigate("/Registration");
  }

  return (
    <div>
      <div className='con1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65vh', justifyContent: 'center' }}>
        <Link to="/Registration">
          <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Register</Button>
        </Link>
        <Link to="/Login"> 
          <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Login</Button>
        </Link>
        <Link to="/QuickFIR">
          <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Quick FIR</Button>
        </Link>
      </div>
      <TextExample />
      <footer style={{ position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
  );
}

export default Home;
