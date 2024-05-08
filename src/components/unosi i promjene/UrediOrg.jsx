import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UrediOrganizaciju({ organizacija, dohvatiOrganizacije }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [opis, setOpis] = useState('');
  const [radionice, setRadionice] = useState('');

  useEffect(() => {
    if (organizacija) {
      setId(organizacija.id);
      setIme(organizacija.ime);
      setOpis(organizacija.opis);
      setRadionice(organizacija.radionice.join(', '));
    }
  }, [organizacija]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3001/organizacije/${id}`, {
      id,
      ime,
      opis,
      radionice: radionice.split(',').map(item => item.trim()), 
    })
    .then(response => {
      console.log(response);
      handleClose();
      dohvatiOrganizacije();
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
          <Modal.Title>Uredi Organizacije</Modal.Title>
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

            <Form.Group controlId="formOpis">
              <Form.Label>Opis</Form.Label>
              <Form.Control type="text" value={opis} onChange={(e) => setOpis(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formRadionice">
              <Form.Label>Radionice</Form.Label>
              <Form.Control type="text" value={radionice} onChange={(e) => setRadionice(e.target.value)} placeholder="Enter radionice, separated by commas" />
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

export default UrediOrganizaciju;