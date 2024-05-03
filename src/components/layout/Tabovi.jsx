import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tablica from '../tablice/TablicaRadionice';
import TablicaPredavaci from '../tablice/TablicaPredavaci';
import TablicaOrganizacije from '../tablice/TablicaOrganizacije';

function Tabovi() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="radionice" title="Radionice">
        <Tablica />
      </Tab>
      <Tab eventKey="predavaci" title="Predavaci">
        <TablicaPredavaci />
      </Tab>
      <Tab eventKey="organizacije" title="Organizacije" >
        <TablicaOrganizacije />
      </Tab>
    </Tabs>
  );
}

export default Tabovi;