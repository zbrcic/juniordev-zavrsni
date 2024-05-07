import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UrediPredavace({ predavac, dohvatiPredavace }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [ime, setIme] = useState('');
  const [biografija, setBiografija] = useState('');
  const [organizacija, setOrganizacija] = useState('');

  useEffect(() => {
    if (predavac) {
      setId(predavac.id);
      setIme(predavac.ime);
      setBiografija(predavac.biografija);
      setOrganizacija(predavac.organizacija);
    }
  }, [predavac]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/predavaci/${id}`, {
      id,
      ime,
      biografija,
      organizacija,
    })
    .then(response => {
      console.log(response);
      handleClose();
      dohvatiPredavace();
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
          <Modal.Title>Uredi Predavače</Modal.Title>
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

            <Form.Group controlId="formBiografija">
              <Form.Label>Biografija</Form.Label>
              <Form.Control type="text" value={biografija} onChange={(e) => setBiografija(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formOrganizacije">
              <Form.Label>Organizacije</Form.Label>
              <Form.Control type="text" value={organizacija} onChange={(e) => setOrganizacija(e.target.value)} />
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

export default UrediPredavace;