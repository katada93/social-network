import React from 'react'
import './Header.scss'


const logoImg = 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'

const Header = () => {
  return (
    <header className="header" >
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            <img src={logoImg} alt="Logo" />
          </a>
        </div>
        <div className="login">
          <a className='login__link' href="/login">Login</a>
        </div>
      </div>
    </header>
  )
}

export default Header
