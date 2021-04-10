import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, getStatus } from '../../redux/profile';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import './Profile.scss';
import { Redirect, withRouter } from 'react-router';
import ProfileStatus from './ProfileInfo/ProfileStatus';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const { profile, status } = useSelector(({ profile }) => profile);
  const { isAuth, userId: ID } = useSelector(({ auth }) => auth);
  const userId = match.params.userId || ID;

  useEffect(() => {
    (async () => {
      await dispatch(getProfile(userId));
      await dispatch(getStatus(userId));
    })();
  }, [userId, dispatch]);

  if (!isAuth) {
    return <Redirect to='/login' />;
  }
  return (
    <div className='profile'>
      <ProfileInfo profile={profile} />
      <ProfileStatus status={status} />
      <MyPosts />
    </div>
  );
};

export default withRouter(Profile);
