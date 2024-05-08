import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Radionica from '../Radionica';
import Predavaci from '../Predavaci';
import { useContext } from 'react';
import AdminContext from '../Kontekst';
import Tabovi from '../layout/Tabovi';
import Sidebar from './Sidebar1';
import logo from '../logo/juniorDev.png'

function Header() {
  const { uloga } = useContext(AdminContext);

  console.log(uloga);

  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        <img src={logo} alt="Logo" style={{ display: 'inline-block', width: '16%' }} />
      </div>
      <Tabs
        defaultActiveKey="radionice"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="radionice" title="Radionice">
          {/* Ovde mi ide tab radionice */}
          <Radionica />
          <Sidebar />
        </Tab>
        <Tab eventKey="predavaci" title="Predavaci">
          {/* Ovde mi ide tab radionice */}
          <Predavaci />

        </Tab>
        <Tab eventKey="contact" title="Administracija" disabled={uloga !== 'admin'}>
          <Tabovi />
          
        </Tab>
      </Tabs>
    </div>
  );
}

export default Header;