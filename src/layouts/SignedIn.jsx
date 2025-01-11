import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/179505787?v=4&size=64" />
        <Dropdown pointing="top left" text="Ercan">
          <Dropdown.Menu>
            <Dropdown.Item onClick text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
