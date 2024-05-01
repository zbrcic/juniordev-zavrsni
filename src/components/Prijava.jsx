import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Prijava({ show, handleClose, handleSave }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prijavi se!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Puno ime</Form.Label>
            <Form.Control
                type="text"
                placeholder="Unesite puno ime"
                required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email adresa</Form.Label>
            <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
            />
            </Form.Group>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            >
            <Form.Label>Razlog prijave</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Opisite razlog prijave."/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zatvori
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Spremi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Prijava;