import React from 'react'
import { Navbar, Button, Container } from 'react-bootstrap'


const logoImg = 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div className="header__logo" style={{ width: '100px' }}>
            <img
              src={logoImg}
              alt="Logo"
            />
          </div>
        </Navbar.Brand>
        <Button variant="outline-info">Login</Button>
      </Container>
    </Navbar>
  )
}

export default Header
