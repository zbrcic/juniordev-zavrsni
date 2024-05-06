import React from 'react';
import Button from 'react-bootstrap/Button';

function BrisiPred({ predavac, brisiPredavaca }) {
  return (
    <Button variant="danger" onClick={() => brisiPredavaca(predavac.id)}>
      Brisi
    </Button>
  );
}

export default BrisiPred;