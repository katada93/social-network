import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button, Container } from 'react-bootstrap'
import { getUserAuthData } from '../redux/auth'
import { NavLink } from 'react-router-dom'


const logoImg = 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { isAuth, login } = useSelector(({ auth }) => auth)

  useEffect(() => {
    dispatch(getUserAuthData())
  }, [])
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/">
          <div className="header__logo" style={{ width: '100px' }}>
            <img
              src={logoImg}
              alt="Logo"
            />
          </div>
        </NavLink>
        {isAuth
          ? <span style={{ color: '#fff' }}>{login}</span>
          : <NavLink to="/login"><Button variant="outline-info">Login</Button></NavLink>}
      </Container>
    </Navbar>
  )
}

export default Header
