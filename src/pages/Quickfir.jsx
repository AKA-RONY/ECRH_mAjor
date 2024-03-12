// import React from 'react';

// const QuickFIR = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="row2">
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//           <h2 style={{ textAlign: 'center', color: 'Black', fontWeight: 'bold' }}>QUICK FIR</h2>
//           <form action="quickFIRServlet" method="post">
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="emergencyContact">Alternate Number (Emergency Contact):</label>
//               <input type="tel" className="form-control" id="emergencyContact" name="emergencyContact" placeholder="Enter alternate number" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="category">Category:</label>
//               <select className="form-control" id="category" name="category" required>
//                 <option value="">Select category</option>
//                 <option value="Theft">Theft</option>
//                 <option value="Assault">Assault</option>
//                 <option value="Fraud">Fraud</option>
//                 <option value="Drug-Related Crimes">Drug-Related Crimes</option>
//                 <option value="Vandalism">Vandalism</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>
//             <div className="form-group" id="incidentDescriptionGroup" style={{ display: 'none' }}>
//               <label htmlFor="description">Incident Description:</label>
//               <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter incident description"></textarea>
//             </div>
//             <div className="form-group">
//               <label htmlFor="date">When Occurred (Date):</label>
//               <input type="date" className="form-control" id="date" name="date" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="whenOccurred">When Occurred (TIME):</label>
//               <input type="time" className="form-control" id="whenOccurredTime" name="whenOccurredTime" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="location">Where Occurred (Location):</label>
//               <input type="text" className="form-control" id="location" name="location" placeholder="Enter location" required />
//             </div>
//             <button type="submit" className="btn btn-primary btn-block">Submit</button>
//           </form>
      
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickFIR;




import React from 'react';

const QuickFIR = () => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const incidentDescriptionGroup = document.getElementById('incidentDescriptionGroup');
    if (selectedCategory === '') {
      incidentDescriptionGroup.style.display = 'none';
    }
     else {
        
      incidentDescriptionGroup.style.display = 'block';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row2">
          <br/>
          
          <br/>
          <h2 style={{ textAlign: 'center', color: 'Black', fontWeight: 'bold' }}>QUICK FIR</h2>
          <form action="quickFIRServlet" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContact">Alternate Number (Emergency Contact):</label>
              <input type="tel" className="form-control" id="emergencyContact" name="emergencyContact" placeholder="Enter alternate number" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select className="form-control" id="category" name="category" onChange={handleCategoryChange} required>
                <option value="">Select category</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Fraud">Fraud</option>
                <option value="Drug-Related Crimes">Drug-Related Crimes</option>
                <option value="Vandalism">Vandalism</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group" id="incidentDescriptionGroup" style={{ display: 'none' }}>
              <label htmlFor="description">Incident Description:</label>
              <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter incident description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date">When Occurred (Date):</label>
              <input type="date" className="form-control" id="date" name="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="whenOccurred">When Occurred (TIME):</label>
              <input type="time" className="form-control" id="whenOccurredTime" name="whenOccurredTime" required />
            </div>
            <div className="form-group">
              <label htmlFor="location(state)">Where Occurred (State):</label>
              <input type="text" className="form-control" id="location-state" name="location" placeholder="Enter State" required />
            </div>
            <div className="form-group">
              <label htmlFor="location(city)">Where Occurred (City):</label>
              <input type="text" className="form-control" id="location-city" name="location" placeholder="Enter City" required />
            </div>
            <div className="form-group">
              <label htmlFor="Landmark">Landmark:</label>
              <input type="text" className="form-control" id="location-landmark" name="location" placeholder="apartment/flat/school etc..." required />
            </div>
           
            <button style={{marginTop:'10px'}}  type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
      <footer style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
  );
};

export default QuickFIR;
