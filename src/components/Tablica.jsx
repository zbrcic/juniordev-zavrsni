import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Tablica() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/radionice')
      .then(response => {
        setData(response.data);
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
          <th>Datum</th>
          <th>Predavac</th>
          <th>Broj prijava</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ime}</td>
            <td>{item.datum}</td>
            <td>{item.predavac}</td>
            <td>{item.broj_prijava}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tablica;