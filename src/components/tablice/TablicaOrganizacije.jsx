import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function TablicaOrganizacije() {
  const [organizacije, setOrganizacije] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/organizacije')
      .then(response => {
        setOrganizacije(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Radionice</th>
        </tr>
      </thead>
      <tbody>
        {organizacije.map((organizacija) => (
          <tr key={organizacija.id}>
            <td>{organizacija.ime}</td>
            <td>{organizacija.radionice.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaOrganizacije;