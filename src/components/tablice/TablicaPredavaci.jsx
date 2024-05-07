import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import UrediPredavace from '../unosi i promjene/UrediPredav';
import BrisiPredavace from '../unosi i promjene/BrisiPred';

function TablicaPredavaci({ predavaci, dohvatiPredavace }) {


  useEffect(dohvatiPredavace, []);

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
           <td>
             <UrediPredavace predavac={predavac} dohvatiPredavace={dohvatiPredavace} />
              <BrisiPredavace predavac={predavac} dohvatiPredavace={dohvatiPredavace} />
           </td> 
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaPredavaci;