import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import axios from 'axios';
import TablicaRadionice from '../tablice/TablicaRadionice';
import TablicaPredavaci from '../tablice/TablicaPredavaci';
import TablicaOrganizacije from '../tablice/TablicaOrganizacije';
import UnosRadi from '../unosi i promjene/Unosradi';
import UnosPredav from '../unosi i promjene/UnosPredav';

function Tabovi() {
  const [radionice, setRadionice] = useState([]);
  const [predavaci, setPredavaci] = useState([]);

  const dohvatiRadionice = () => {
    axios.get('http://localhost:3001/radionice')
      .then(response => {
        setRadionice(response.data);
      })
      .catch(error => {
        console.error('greska!', error);
      });
  };
  
  const dohvatiPredavace = () => {
    axios.get('http://localhost:3001/predavaci')
      .then(response => {
        console.log(response.data); // Add this line

        setPredavaci(response.data);
      })
      .catch(error => {
        console.error('greska!', error);
      });
  };



  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="radionice" title="Radionice">
        <TablicaRadionice radionice={radionice} dohvatiRadionice={dohvatiRadionice} />
        <UnosRadi dohvatiRadionice={dohvatiRadionice} />
      </Tab>
      <Tab eventKey="predavaci" title="Predavaci">
        <TablicaPredavaci predavaci={predavaci} />
        <UnosPredav dohvatiPredavace={dohvatiPredavace}/>
      </Tab>
      <Tab eventKey="organizacije" title="Organizacije" >
        <TablicaOrganizacije />
      </Tab>
    </Tabs>
  );
}

export default Tabovi;