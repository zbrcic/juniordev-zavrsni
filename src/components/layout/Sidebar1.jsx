import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function Sidebar1() {
  const [selectedKey, setSelectedKey] = useState('');

  const handleSelect = (selectedKey) => {
    setSelectedKey(selectedKey);
  };

  return (
    <ListGroup as="ul" activeKey={selectedKey} onSelect={handleSelect}>
      <ListGroup.Item as="li" eventKey="radionice">
        <input type="checkbox" id="radionice" name="radionice" />
        <label htmlFor="radionice">Radionice</label>
      </ListGroup.Item>
      <ListGroup.Item as="li" eventKey="predavaci">
        <input type="checkbox" id="predavaci" name="predavaci" />
        <label htmlFor="predavaci">Predavaci</label>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Sidebar1;