import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

 
function TablicaPredavaci({ predavaci }) {  // Accept predavaci as a prop
  console.log(predavaci); // Add this line

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
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablicaPredavaci;