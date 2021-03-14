import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unFollow } from '../../redux/users'
import './Users.scss'

const Users = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(({ users }) => users)

  return (
    <div className="users">
      {users.map(user => (
        <div key={user.id} className="users__item">
          <div className="users__item-logo">
            <img src={user.photoUrl} alt="Logo" />
            {user.followed
              ? <button onClick={() => dispatch(unFollow(user.id))}>unfollow</button>
              : <button onClick={() => dispatch(follow(user.id))}>follow</button>}
          </div>
          <div className="users__item-info">
            <div className="users__item-about">
              <span className="users__item-name">{user.fullName}</span>
              <span className="users__item-status">{user.status}</span>
            </div>
            <div className="users__item-location">
              <span>{user.location.city}</span>
              <br />
              <span>{user.location.country}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
