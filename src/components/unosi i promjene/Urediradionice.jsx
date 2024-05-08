import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UrediRadionice({ radionica, dohvatiRadionice }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [datum, setDatum] = useState('');
  const [predavac, setPredavac] = useState('');
  const [opis, setOpis] = useState('');

  useEffect(() => {
    if (radionica) {
      setId(radionica.id);
      setIme(radionica.ime);
      setDatum(radionica.datum);
      setPredavac(radionica.predavac);
      setOpis(radionica.opis);
    }
  }, [radionica]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3001/radionice/${id}`, {
      id,
      ime,
      datum,
      predavac,
      opis,
    })
    .then(response => {
      console.log(response);
      handleClose();
      dohvatiRadionice();
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Uredi
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uredi Radionice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control type="text" value={id} readOnly />
            </Form.Group>

            <Form.Group controlId="formIme">
              <Form.Label>Ime</Form.Label>
              <Form.Control type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPredavac">
              <Form.Label>Predavac</Form.Label>
              <Form.Control type="text" value={predavac} onChange={(e) => setPredavac(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formDatum">
              <Form.Label>Datum</Form.Label>
              <Form.Control type="date" value={datum} onChange={(e) => setDatum(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formOpis">
              <Form.Label>Opis</Form.Label>
              <Form.Control type="text" value={opis} onChange={(e) => setOpis(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Spremi
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UrediRadionice;