import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function UnosOrg({ dohvatiOrganizacije }) {
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [opis, setOpis] = useState('');
  const [radionice, setRadionice] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/organizacije', {
      id,
      ime,
      opis,
      radionice: radionice.split(',').map(item => item.trim()), 
    })
    .then(response => {
      console.log(response);
      dohvatiOrganizacije();
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };


  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formId">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formIme">
          <Form.Label>Ime</Form.Label>
          <Form.Control type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formOpis">
          <Form.Label>Opis</Form.Label>
          <Form.Control type="text" value={opis} onChange={(e) => setOpis(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formRadionice">
          <Form.Label>Radionice</Form.Label>
          <Form.Control type="text" value={radionice} onChange={(e) => setRadionice(e.target.value)} placeholder="Enter radionice, separated by commas" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Spremi novu
        </Button>
      </Form>
    </div>
  );
}

export default UnosOrg;