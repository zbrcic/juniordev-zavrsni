import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Radionica from '../Radionica';
import Predavaci from '../Predavaci';
import { useContext } from 'react';
import AdminContext from '../Kontekst';
import Tabovi from '../layout/Tabovi';

function Header() {
  const { uloga } = useContext(AdminContext);

  console.log(uloga);

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
      <Tab eventKey="contact" title="Administracija" disabled={uloga !== 'admin'}>
        <Tabovi />
        
      </Tab>
    </Tabs>
  );
}

export default Header;