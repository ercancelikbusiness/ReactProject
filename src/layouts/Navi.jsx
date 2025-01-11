import React, { useState } from 'react'
import CartSummary from './CartSummary'
import {
  Dropdown,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

// inverted fixed kısmında sayfadaki home messages kısmının görünümünü ayarladık. Container kısmını menü inverted'ı kapsayacak şekilde yapsaydık, language kısmı sayfada ortalanmayacaktı mesela. Bu hazır kodları https://react.semantic-ui.com/ sitesinden aldık
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // useState içindeki değer  {isAuthenticated?<SignedIn/>:<SignOut/>} if'inde işimize yarayacak

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
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Menu position='right'>
            <CartSummary />
            {isAuthenticated
              ? <SignedIn signOut={handleSignOut} bisey="1" />
              : <SignedOut signIn={handleSignIn} />
            }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
