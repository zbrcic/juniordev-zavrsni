import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Radionica() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/radionice')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      {data ? (
        <>
          <h1>{data.ime}</h1>
          <p>Datum: {data.datum}</p>
          <p>Predavac: {data.predavac}</p>
          <p>Opis: {data.opis}</p>
          <p>Broj prijava: {data.broj_prijava}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Radionica;