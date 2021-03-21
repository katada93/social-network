import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button, Container } from 'react-bootstrap'
import { setAuthUserData } from '../redux/auth'


const logoImg = 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { isAuth, login } = useSelector(({ auth }) => auth)

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      })
      .then(({ data }) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(data.data))
        }
      })
  }, [])
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
        {isAuth
          ? <span style={{ color: '#fff' }}>{login}</span>
          : <Button variant="outline-info">Login</Button>}
      </Container>
    </Navbar>
  )
}

export default Header
