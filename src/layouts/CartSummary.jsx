import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

export default function CartSummary() {
  return (
    <Dropdown item text='Sepetiniz'>
      <Dropdown.Menu>
        <Dropdown.Item>Acer Laptop</Dropdown.Item>
        <Dropdown.Item>Asus Laptop</Dropdown.Item>
        <Dropdown.Item>Dell Laptop</Dropdown.Item>
        <Dropdown.Divider/> {/*// çizgi bırakmaya yarar*/}
        <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item> {/*//sepete git' e tıklayınca Dashboard'daki cart url sinin gömüldüğü sınıf calısır*/}
      </Dropdown.Menu>
    </Dropdown>
  );
}
