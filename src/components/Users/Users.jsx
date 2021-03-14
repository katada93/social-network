import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unFollow, setUsers } from '../../redux/users'
import './Users.scss'

const userLogo = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'


const Users = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(({ users }) => users)

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(({ data }) => dispatch(setUsers(data.items)))
  }, [])

  return (
    <div className="users">
      {users.map(user => (
        <div key={user.id} className="users__item">
          <div className="users__item-logo">
            <img src={user.photos.small || userLogo} alt="Logo" />
            {user.followed
              ? <button onClick={() => dispatch(unFollow(user.id))}>unfollow</button>
              : <button onClick={() => dispatch(follow(user.id))}>follow</button>}
          </div>
          <div className="users__item-info">
            <div className="users__item-about">
              <span className="users__item-name">{user.name}</span>
              <span className="users__item-status">{user.status}</span>
            </div>
            <div className="users__item-location">
              <span>Russia</span>
              {/* <span>{user.location.city}</span>
              <br />
              <span>{user.location.country}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
