import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'
import { withRouter } from 'react-router'

const Profile = ({ match }) => {
  const dispatch = useDispatch()
  const { profile } = useSelector(({ profile }) => profile)
  const userId = match.params.userId || 12402

  useEffect(() => {
    dispatch(getProfile(userId))
  }, [userId])

  return (
    <div className="profile">
      <ProfileInfo profile={profile} />
      <MyPosts />
    </div>
  )
}

export default withRouter(Profile)