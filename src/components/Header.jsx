import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Header() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Radionice">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Predavaci">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Administracija" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Header;