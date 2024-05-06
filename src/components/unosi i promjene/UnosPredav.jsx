// UnosPredav.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UnosPredav({ dohvatiPredavace }) {  // Accept dohvatiPredavace as a prop
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [biografija, setBiografija] = useState('');
  const [organizacija, setOrganizacija] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/predavaci', {
      id,
      ime,
      biografija,
      organizacija,
    })
    .then(response => {
      console.log(response);
      setId('');
      setIme('');
      setBiografija('');
      setOrganizacija('');
      dohvatiPredavace();  // Call the refresh function after successful POST request
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formIme">
        <Form.Label>Ime</Form.Label>
        <Form.Control type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBiografija">
        <Form.Label>Biografija</Form.Label>
        <Form.Control type="text" value={biografija} onChange={(e) => setBiografija(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formOrganizacija">
        <Form.Label>Organizacija</Form.Label>
        <Form.Control type="text" value={organizacija} onChange={(e) => setOrganizacija(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Unesi
      </Button>
    </Form>
  );
}

export default UnosPredav;