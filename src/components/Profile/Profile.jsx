import React from 'react'
import './Profile.scss'

const bgcImg = 'https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__bg">
        <img src={bgcImg} alt="bg Image" />
      </div>
      <h2>Profile</h2>
    </div>
  )
}

export default Profile
