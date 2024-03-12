// components/pages/AboutUs.js

// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum...</p>
//     </div>
//   );
// };

// export default AboutUs;




import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutUs() {
  return (
    <div>
      <header>
         <h1 style={{ fontWeight: 'bold', textAlign: 'center', margin: '10px 0', color: 'white' }}>About Us</h1>
      </header>
      <section className="mission">
          <div className="container">
              <h2>Our Mission</h2>
              <p>
                  E-Crime Report Hub is committed to providing a secure and accessible platform for victims of crimes to
                  report incidents online and manage their cases effectively. Our mission is to bridge the gap between law
                  enforcement and the community, ensuring a swift and just response to criminal activities.
              </p>
          </div>
      </section>
      <section className="values">
          <div className="container">
              <h2>Our Core Values</h2>
              <ul>
                  <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our
                      interactions.</li>
                  <li><strong>User-Centricity:</strong> Our users' needs and concerns are at the heart of our platform's
                      design and operation.</li>
                  <li><strong>Transparency:</strong> We operate with transparency, ensuring that our users are
                      well-informed throughout the process.</li>
                  <li><strong>Community Impact:</strong> We are committed to making our communities safer by facilitating
                      crime reporting and prevention.</li>
              </ul>
          </div>
      </section>
      <section className="why-choose-us">
          <div className="container">
              <h2>Why Choose Us</h2>
              <p>
                  When you choose E-Crime Report Hub, you benefit from:
              </p>
              <ul>
                  <li>Efficient online FIR filing and case management.</li>
                  <li>Experienced professionals dedicated to your safety.</li>
                  <li>Timely updates on your case status.</li>
                  <li>A user-friendly platform accessible from anywhere.</li>
                  <li>Community-focused initiatives for safer neighborhoods.</li>
              </ul>
          </div>
      </section>
      <section className="team">
          <div className="container">
              <h2 style={{ textAlign: 'center' }}>Our Team</h2>
              <div className="team-members" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                      <img src="images/salvik4.5.jpg" alt="John Doe" />
                      <h3>Something 1</h3>
                      <p>Core Developer <br />
                          (Team Lead)</p>
                      <p>An aspiring data professional passionate about leveraging data to drive insights and informed decision-making. Skilled in Data Engineering, Data Analysis, programming.
                      </p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                      <img src="images/sbarua.jpg" alt="Jane Smith" />
                      <h3>Something 2</h3>
                      <p> He's responsible for overseeing an organization's technological vision, strategy, and implementation to align with business objectives,  leading the development and execution of technology initiatives, ensuring innovation and efficiency within the company.</p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                      <img src="images/ani.jpg" alt="Emily Brown" />
                      <h3>Something 3</h3>
                      <p>Community Manager</p>
                      <p>She is dedicated to fostering engaging interactions and cultivating a vibrant online space. Committed to empowering and amplifying the voices within our community..</p>
                  </div>
              </div>
          </div>
      </section>
      <footer style={{ position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
  );
}

export default AboutUs;
