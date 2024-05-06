import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function BrisiRadionice({ radionica, dohvatiRadionice }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/radionice/${radionica.id}`)
      .then(response => {
        console.log(response);
        dohvatiRadionice();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Brisi
    </Button>
  );
}

export default BrisiRadionice;