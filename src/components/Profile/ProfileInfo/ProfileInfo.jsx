import React from 'react'

import './ProfileInfo.scss'

const userLogo = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
const backgroundImg = 'https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'

const ProfileInfo = () => {

  return (
    <div className="profile-info">
      <div className="profile-info__img">
        <img src={backgroundImg} alt="bg" />
      </div>
      <div className="user">
        <div className="user__img">
          <img src={userLogo} alt="" />
        </div>
        <div className="user_data">
          <h3>Jacky</h3>
          <p>Actor</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo