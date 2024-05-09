import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Prijava from './Prijava';
import axios from 'axios';

function Radionica({ filters }) {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [odabranaRadionica, setOdabranaRadionica] = useState(null);
  

  const handleClose = () => setShow(false);
 
  const handleShow = (radionica) => {
    setOdabranaRadionica(radionica);
    setShow(true);
  };
  
  const handleSave = (radionica) => {
    axios.patch(`http://localhost:3001/radionice/${radionica.id}`, {
      broj_prijava: radionica.broj_prijava + 1
    })
      .then(() => {
        setData(data.map(item => item.id === radionica.id ? {...item, broj_prijava: item.broj_prijava + 1} : item));
        handleClose();
      })
      .catch((error) => {
        console.error('greska!: ', error);
      });
  };


  useEffect(() => {
    axios.get('http://localhost:3001/radionice')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('greska!: ', error);
      });
  }, []);

  return (
    <>
      {data ? (
        data.map((radionica, index) => (
          <div key={index} className="radionica-div">
            <h1>{radionica.ime}</h1>
            <p>Datum: {radionica.datum}</p>
            <p>Predavac: {radionica.predavac}</p>
            <p>Opis: {radionica.opis}</p>
            <p>Broj prijava: {radionica.broj_prijava}</p>
            <Button variant="primary" onClick={() => handleShow(radionica)}>Prijavi se</Button>
            <Prijava show={show} handleClose={handleClose} handleSave={() => handleSave(odabranaRadionica)} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Radionica;