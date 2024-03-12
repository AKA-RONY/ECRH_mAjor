import React from 'react';
// import './Theft.css'; // Import your CSS file for styling

function Theft() {
    return (
        <div className="container" >
            <div className="title"style={{ textAlign: "center" }}>
                <h1>Understanding Theft</h1>
            </div>
            <div className="content">
                <div className="top-image" style={{ textAlign: "center" }}>
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2021/02/1_fe09o4GTVjCkPwjpJ3Gv6g.jpeg" alt="Theft Image" />
                </div>
                <br />
                <p>
                    Theft is the unauthorized taking of someone else's property with the intent to permanently deprive
                    the owner of it. It is a crime that can take many forms and have serious legal consequences.
                </p>
                <h2>Key Points About Theft:</h2>
                <ul>
                    <li><b>Intent:</b> Theft requires the intent to permanently deprive the owner of their property.</li>
                    <li><b>Types:</b> Theft can include various types, such as petty theft, grand theft, shoplifting, and
                        burglary.</li>
                    <li><b>Legal Consequences:</b> Those convicted of theft may face criminal charges, fines, and
                        imprisonment.</li>
                    <li><b>Prevention:</b> Measures to prevent theft include securing valuables, using security systems,
                        and being vigilant in public places.</li>
                </ul>
                <h2>Common Forms of Theft:</h2>
                <p>Theft can occur in different contexts, including:</p>
                <ul>
                    <li><b>Petty Theft:</b> Involves the theft of low-value items.</li>
                    <li><b>Grand Theft:</b> Involves the theft of high-value items or property.</li>
                    <li><b>Shoplifting:</b> Theft from a retail store.</li>
                    <li><b>Burglary:</b> Unauthorized entry into a building with the intent to commit theft or another
                        crime.</li>
                </ul>
                <p>Efforts to combat theft include law enforcement initiatives, community awareness, and security
                    measures. Understanding the different forms of theft is essential in preventing and addressing this
                    crime.</p>
            </div>
            <footer style={{ position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
        </div>
    );
}

export default Theft;
