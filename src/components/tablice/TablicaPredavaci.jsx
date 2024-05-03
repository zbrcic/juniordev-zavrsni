import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function TablicaPredavaci() {
  const [predavaci, setPredavaci] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/predavaci')
      .then(response => {
        setPredavaci(response.data);
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
          <th>Organizacija</th>
        </tr>
      </thead>
      <tbody>
        {predavaci.map((predavac) => (
          <tr key={predavac.id}>
            <td>{predavac.ime}</td>
            <td>{predavac.organizacija}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaPredavaci;