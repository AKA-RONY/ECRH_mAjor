import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function RegistrationComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    address: '',
    documentType: 'select',
    documentDetails: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
  };

  const showDocumentDetails = () => {
    const documentSelect = document.getElementById('document');
    const documentDetails = document.getElementById('documentDetailsInput');
    const selectedOption = documentSelect.options[documentSelect.selectedIndex].text;

    if (documentSelect.value !== 'select') {
      documentDetails.style.display = 'block';
      documentDetails.setAttribute('required', 'true');
      documentDetails.placeholder = `Enter ${selectedOption} details`;
    } else {
      documentDetails.style.display = 'none';
      documentDetails.removeAttribute('required');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="document">
          <Form.Label>Government Issued Document</Form.Label>
          <Form.Control
            as="select"
            name="documentType"
            onChange={(e) => { handleChange(e); showDocumentDetails(); }}
            value={formData.documentType}
            required
          >
            <option value="select">Select any one</option>
            <option value="aadhar">Aadhaar Number</option>
            <option value="pan">PAN Number</option>
            <option value="driving">Driving License Number</option>
            <option value="passport">Passport Number</option>
          </Form.Control>
        </Form.Group>
        <Form.Group id="documentDetails" style={{ display: 'none' }}>
          <Form.Label>Document Details</Form.Label>
          <Form.Control
            type="text"
            id="documentDetailsInput"
            name="documentDetails"
            placeholder="Enter document details"
          />
        </Form.Group>
        <Form.Group controlId="agreement">
          <Form.Check
            type="checkbox"
            label="I AGREE THAT ALL THE INFO MENTIONED ABOVE ARE LEGIT AND I WILL USE THIS WEBSITE WISELY AS PER THE LAW"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegistrationComponent;
