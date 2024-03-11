import React from 'react';
import Card from 'react-bootstrap/Card';

function ReachUs() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingBottom:"5px" ,margin: '2px', height :"150px" }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>REACH US VIA </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Emergency contact number : +91 9085736245 <br/>
            Email us : <Card.Link href="#">help.ecrhsupport@gmail.com</Card.Link><br/>
            Police Station Near me : <Card.Link href="#"> [Google Map]:</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReachUs;




// import React from 'react';
// import Card from 'react-bootstrap/Card';

// function TextExample() {
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

//   return (
//     <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
//       <Card style={{ width: '500px' }}>
//         <Card.Body>
//           <Card.Title style={{ textAlign: 'center' }}>REACH US VIA </Card.Title><br/>
//           {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
//           <Card.Text>
//             Emergency contact number : +91 9085736245 <br/>
//             Email us : <Card.Link href="#">help.ecrhsupport@gmail.com</Card.Link><br/>
//             Police Station Near me : <Card.Link href="#" onClick={openGoogleMap}> [Google Map]</Card.Link>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default TextExample;










