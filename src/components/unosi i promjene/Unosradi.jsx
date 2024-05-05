import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UnosRadi() {
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [predavac, setPredavac] = useState('');
  const [opis, setOpis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/radionice', {
      id,
      ime,
      predavac,
      opis,
      datum: '01.01.2025', // You can change this to the current date or another default value
      broj_prijava: 0, // You can change this to a different default value
    })
    .then(response => {
      console.log(response);
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

      <Form.Group controlId="formPredavac">
        <Form.Label>Predavac</Form.Label>
        <Form.Control type="text" value={predavac} onChange={(e) => setPredavac(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formOpis">
        <Form.Label>Opis</Form.Label>
        <Form.Control type="text" value={opis} onChange={(e) => setOpis(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UnosRadi;