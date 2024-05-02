import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import AdminContext from './Kontekst';

function Tipka() {
  const { uloga, setUloga } = useContext(AdminContext);

  const handleSwitchChange = (event) => {
    setUloga(event.target.checked ? 'admin' : 'user');
  };

  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Admin"
        onChange={handleSwitchChange}
        checked={uloga === 'admin'}
      />
    </Form>
  );
}

export default Tipka; 