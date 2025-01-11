import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from 'semantic-ui-react'
// dashboard'daki dropdown language kısmını buraya aldık languege kısmında sepet görünümü elde etmek için
export default function CartSummary() {
  return (
    <div>
       <Dropdown item text='Language'>
              <DropdownMenu>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Russian</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}
