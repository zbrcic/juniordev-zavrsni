import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import UrediRadionice from '../unosi i promjene/Urediradionice';
import BrisiRadionice from '../unosi i promjene/BrisiRadi';

function TablicaRadionice({ radionice, dohvatiRadionice }) {


  useEffect(dohvatiRadionice, []);

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
            <td>
              <UrediRadionice radionica={radionica} dohvatiRadionice={dohvatiRadionice} />
              <BrisiRadionice radionica={radionica} dohvatiRadionice={dohvatiRadionice} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaRadionice;