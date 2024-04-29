import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Predavaci() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/predavaci')
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
        data.map((predavac, index) => (
          <div key={index}>
            <h1>{predavac.ime}</h1>
            <p>Biografija: {predavac.biografija}</p>
            <p>Organizacija: {predavac.organizacija}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Predavaci;