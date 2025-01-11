import React , { useState} from 'react'
import CartSummary from './CartSummary'
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
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

// inverted fixed kısmında  sayfadaki home messages kisminin görünümünü ayarladık // container kısmını menü inverted'ide kapsayacak şekilde yapsaydık  langueges kısmı  sayfada ortalanmıyacaktı mesela   bu hazır kodları https://react.semantic-ui.com/ sitesinden
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // useState içindeki değer  {isAuthenticated?<SignedIn/>:<SignOut/>}  if'inde işimize yarıcak

  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <MenuItem
            name='home'
          />
          <MenuItem
            name='messages'
          />
          <MenuMenu position='right'>
            <CartSummary />
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>} 
            
            
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  )
}
