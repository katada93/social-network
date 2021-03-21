import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserProfile } from '../../redux/profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'
import { withRouter } from 'react-router'

const Profile = ({ match }) => {
  const dispatch = useDispatch()
  const { profile } = useSelector(({ profile }) => profile)
  const userId = match.params.userId || 12402

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(({ data }) => dispatch(setUserProfile(data)))
  }, [userId])

  return (
    <div className="profile">
      <ProfileInfo profile={profile} />
      <MyPosts />
    </div>
  )
}

export default withRouter(Profile)