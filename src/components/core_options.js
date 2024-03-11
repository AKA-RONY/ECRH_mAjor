import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BigButtonGroup() {

  const navigate = useNavigate(); 
function register(){
  navigate("/Registration")
}

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70vh', justifyContent: 'center' }}>

      <Link to="/Registration">
      <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Register</Button>
     </Link>

      <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Login</Button>
      <Button variant="primary" size="lg" style={{ margin: '10px 0', padding: '50px' , width: '500px'}}>Quick FIR</Button>
   
    </div>
  );
}

export default BigButtonGroup;

