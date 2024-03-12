import React from 'react';
// import './Fraud.css'; // Import your CSS file for styling

function Fraud() {
    return (
        <div className="container">
            <div className="title" style={{ textAlign: "center" }}> 
                <h1>Understanding Fraud</h1>
            </div>
            <div className="content">
                <div className="top-image" style={{ textAlign: "center" }}>
                    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*M2dT90tDTwIYTQcNPkcmvg.jpeg" alt="Fraud Image" />
                </div>
                <br />
                <p>
                    Fraud is a deceptive act or scheme intended to result in financial or personal gain for the perpetrator
                    while causing financial or personal loss to the victim. It is a criminal offense that encompasses a wide
                    range of fraudulent activities, from identity theft and online scams to financial fraud and forgery.
                    Understanding fraud is crucial for individuals and businesses to protect themselves from falling victim
                    to fraudulent schemes.
                </p>
                <h2>Key Points About Fraud:</h2>
                <ul>
                    <li><b>Deceptive Intent:</b> Fraud involves intentional deception or misrepresentation with the
                        objective of gaining something of value.</li>
                    <li><b>Types of Fraud:</b> Fraud can take many forms, including identity theft, credit card fraud,
                        online scams, insurance fraud, investment fraud, and more.</li>
                    <li><b>Victims:</b> Anyone can become a victim of fraud, including individuals, businesses, and
                        government organizations.</li>
                    <li><b>Consequences:</b> The consequences of fraud can be severe, including financial loss, damage to
                        one's credit, legal trouble, and emotional distress.</li>
                    <li><b>Prevention:</b> Preventing fraud involves measures like safeguarding personal information,
                        verifying identities, using secure online practices, and staying informed about common fraud
                        schemes.</li>
                </ul>
                <h2>Common Types of Fraud:</h2>
                <p>Fraud can manifest in various ways, including:</p>
                <ul>
                    <li><b>Identity Theft:</b> Stealing personal information to commit financial fraud, apply for credit,
                        or conduct illegal activities under someone else's name.</li>
                    <li><b>Credit Card Fraud:</b> Unauthorized use of credit card information to make purchases or
                        withdrawals without the cardholder's consent.</li>
                    <li><b>Online Scams:</b> Deceptive schemes conducted over the internet, such as phishing, online
                        auctions fraud, and fake websites.</li>
                    <li><b>Investment Fraud:</b> Misleading individuals into investing money in fake or fraudulent
                        investment opportunities.</li>
                    <li><b>Insurance Fraud:</b> Submitting false insurance claims to obtain payouts for losses or injuries
                        that did not occur.</li>
                    <li><b>Forgery:</b> Creating fake documents or signatures to deceive others into accepting counterfeit
                        items or transactions.</li>
                    <li><b>Bank Fraud:</b> Deceptive practices involving banks or financial institutions, such as check
                        kiting and fraudulent loans.</li>
                    <li><b>Wire Fraud:</b> Using electronic communications to defraud victims, often involving false
                        representations or requests for money.</li>
                    <li><b>Phishing:</b> Sending deceptive emails or messages to trick recipients into revealing personal
                        or financial information.</li>
                    <li><b>Ponzi Schemes:</b> Investment schemes that promise high returns but use funds from new investors
                        to pay returns to earlier investors, ultimately collapsing when new investments dry up.</li>
                </ul>
                <p>Preventing fraud requires vigilance, awareness, and responsible online and financial practices. Staying
                    informed about the latest fraud tactics and taking steps to protect personal and financial information
                    are essential in minimizing the risk of falling victim to fraudulent schemes.</p>
            </div>
            <footer style={{ position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
        </div>
    );
}

export default Fraud;
