
import React from 'react';

const Login = () => {
  return (
    
      <div className="container">
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div className="row">
          <div className="row">
            <h2 className="text-center">Login</h2>
            <br/>
            <br/>
            <br/>
            <form action="loginServlet" method="post">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
              </div>
              <button style={{marginTop:'10px'}} type="submit" className="btn btn-primary btn-block">Login</button>
              <br />
              <p><a href="registration">New User? Create New Account</a></p>
            </form>
          </div>
        </div>
      </div>
      <footer style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
  );
};

export default Login;




