import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function BrisiPredavace({ predavac, dohvatiPredavace }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/predavaci/${predavac.id}`)
      .then(response => {
        console.log(response);
        dohvatiPredavace();
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

export default BrisiPredavace;