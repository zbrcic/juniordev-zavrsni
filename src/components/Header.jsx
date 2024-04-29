import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Radionica from './Radionica';
import Predavaci from './Predavaci';

function Header() {
  return (
    <Tabs
      defaultActiveKey="radionice"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="radionice" title="Radionice">
        {/* Ovde mi ide tab radionice */}
        <Radionica />
      </Tab>
      <Tab eventKey="predavaci" title="Predavaci">
        {/* Ovde mi ide tab radionice */}
        <Predavaci />

      </Tab>
      <Tab eventKey="contact" title="Administracija" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Header;