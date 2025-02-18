import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown, Label } from 'semantic-ui-react';

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)


  return (
    <Dropdown item text='Sepetiniz'>
      <Dropdown.Menu>
        {
          cartItems.map((cartItem)=>( 
          <Dropdown.Item key={cartItem.product.id}>
            {cartItem.product.productName}
            <Label>
              {cartItem.quantity}
            </Label>
            </Dropdown.Item>
        ))
         }
       <Dropdown.Divider/> {/*// çizgi bırakmaya yarar*/}
        <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item> {/*//sepete git' e tıklayınca Dashboard'daki cart url sinin gömüldüğü sınıf calısır*/}
      </Dropdown.Menu>
    </Dropdown>
  );
}
