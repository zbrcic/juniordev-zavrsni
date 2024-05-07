import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
 import brisiOrganizaciju from '../unosi i promjene/BrisiOrg';
  import urediOrganizaciju from '../unosi i promjene/UrediOrg';

function TablicaOrganizacije({ organizacije, dohvatiOrganizacije}) {

  useEffect(dohvatiOrganizacije, []);

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
            <td>
              <urediOrganizaciju organizacija={organizacija} dohvatiOrganizacije={dohvatiOrganizacije} />
              <brisiOrganizaciju organizacija={organizacija} dohvatiOrganizacije={dohvatiOrganizacije} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaOrganizacije;