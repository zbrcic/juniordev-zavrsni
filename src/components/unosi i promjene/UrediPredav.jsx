import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UrediPredav({ predavac, urediPredavaca }) {
  const [id, setId] = useState(predavac.id);
  const [ime, setIme] = useState(predavac.ime);
  const [biografija, setBiografija] = useState(predavac.biografija);
  const [organizacija, setOrganizacija] = useState(predavac.organizacija);

  const handleSubmit = (event) => {
    event.preventDefault();

    const uredeniPredavac = {
      id,
      ime,
      biografija,
      organizacija,
    };

    urediPredavaca(uredeniPredavac);
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <Button variant="primary" type="submit">
          Uredi
        </Button>
      </Form>
    </div>
  );
}

export default UrediPredav;