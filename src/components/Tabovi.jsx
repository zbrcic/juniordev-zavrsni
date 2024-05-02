import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tablica from './Tablica';

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
        Tab content for Predavaci
      </Tab>
      <Tab eventKey="organizacije" title="Organizacije" >
        Tab content for Organizacije
      </Tab>
    </Tabs>
  );
}

export default Tabovi;