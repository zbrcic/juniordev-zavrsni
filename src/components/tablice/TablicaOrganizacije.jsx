import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
 import BrisiOrganizaciju from '../unosi i promjene/BrisiOrg';
  import UrediOrganizaciju from '../unosi i promjene/UrediOrg';

function TablicaOrganizacije({ organizacije, dohvatiOrganizacije}) {

  useEffect(dohvatiOrganizacije, []);

  return (
    <Table striped bordered hover className="table">
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
              <UrediOrganizaciju organizacija={organizacija} dohvatiOrganizacije={dohvatiOrganizacije} />
              <BrisiOrganizaciju organizacija={organizacija} dohvatiOrganizacije={dohvatiOrganizacije} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaOrganizacije;