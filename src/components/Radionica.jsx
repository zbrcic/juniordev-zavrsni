import React, { useState, useEffect } from 'react';
import Prijava from './Prijava';
import axios from 'axios';

function Radionica() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('http://localhost:3001/radionice')
      .then((response) => {
        console.log('Server response:', response.data);
        setData(response.data); // Set data to the entire array
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      {data ? (
        data.map((radionica, index) => (
          <div key={index}>
            <h1>{radionica.ime}</h1>
            <p>Datum: {radionica.datum}</p>
            <p>Predavac: {radionica.predavac}</p>
            <p>Opis: {radionica.opis}</p>
            <p>Broj prijava: {radionica.broj_prijava}</p>
            <button onClick={handleShow}>Prijavi se</button>
            <Prijava show={show} handleClose={handleClose} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Radionica;