import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UnosPredav({ dodajPredavaca }) {
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [biografija, setBiografija] = useState('');
  const [organizacija, setOrganizacija] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const noviPredavac = {
      id,
      ime,
      biografija,
      organizacija,
    };
    console.log(noviPredavac); // Log the new predavac object

    dodajPredavaca(noviPredavac);
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

        <Form.Group controlId="formBiografija">
          <Form.Label>Biografija</Form.Label>
          <Form.Control type="text" value={biografija} onChange={(e) => setBiografija(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formOrganizacija">
          <Form.Label>Organizacija</Form.Label>
          <Form.Control type="text" value={organizacija} onChange={(e) => setOrganizacija(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Spremi novu
        </Button>
      </Form>
    </div>
  );
}

export default UnosPredav;