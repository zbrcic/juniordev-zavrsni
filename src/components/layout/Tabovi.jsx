import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tablica from '../tablice/TablicaRadionice';
import TablicaPredavaci from '../tablice/TablicaPredavaci';
import TablicaOrganizacije from '../tablice/TablicaOrganizacije';
import UnosRadi from '../unosi i promjene/Unosradi';
import UrediRadionice from '../unosi i promjene/Urediradionice';

function Tabovi() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="radionice" title="Radionice">
        <Tablica />
        <UnosRadi />
        <UrediRadionice />
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