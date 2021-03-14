import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile