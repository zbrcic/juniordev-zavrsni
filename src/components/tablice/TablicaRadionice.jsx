// TablicaRadionice.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UrediRadionice from '../unosi i promjene/Urediradionice';

function TablicaRadionice() {
  const [radionice, setRadionice] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/radionice')
      .then(response => {
        setRadionice(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Ime</th>
          <th>Predavac</th>
          <th>Opis</th>
          <th>Uredi</th>
        </tr>
      </thead>
      <tbody>
        {radionice.map((radionica) => (
          <tr key={radionica.id}>
            <td>{radionica.id}</td>
            <td>{radionica.ime}</td>
            <td>{radionica.predavac}</td>
            <td>{radionica.opis}</td>
            <td><UrediRadionice radionica={radionica} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaRadionice;