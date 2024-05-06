import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UnosRadi({ dohvatiRadionice }) {
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [datum, setDatum] = useState('');
  const [predavac, setPredavac] = useState('');
  const [opis, setOpis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/radionice', {
      id,
      ime,
      datum,
      predavac,
      opis,
      broj_prijava: 0,
    })
    .then(response => {
      console.log(response);
      dohvatiRadionice();
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

        <Form.Group controlId="formDatum">
          <Form.Label>Datum</Form.Label>
          <Form.Control type="date" value={datum} onChange={(e) => setDatum(e.target.value)} />
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
          Spremi novu
        </Button>
      </Form>
    </div>
  );
}

export default UnosRadi;