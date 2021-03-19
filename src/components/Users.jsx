import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Card, Button, Pagination, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unFollow, setUsers, setCurrentPage, setLoading } from '../redux/users'
import styled from 'styled-components'

const userLogo = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

const UserCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    margin: 5px;
    position: relative;
    background-color: #444;
    color: #fff;
    height: 350px;
    width: 200px;
  }
  .card .card-img-top {
    height: 120px;
  }
  .card .btn {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 70%;
  }
`

const Users = () => {
  const dispatch = useDispatch()
  const { users, pageCount, pageSize, currentPage, loading } = useSelector(({ users }) => users)
  const arrOfPages = Array(pageCount).fill().map((_, i) => i + 1)

  useEffect(() => {
    dispatch(setLoading(true))
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      .then(({ data }) => dispatch(setUsers(data.items)))
  }, [currentPage, pageSize])

  const onSetCurrentPage = (n) => dispatch(setCurrentPage(n))

  return (
    <div className="users" style={{ display: 'flex', flexWrap: 'wrap' }}>

      <Pagination size="sm" style={{ marginTop: '10px', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {arrOfPages.map(n => (
          <Pagination.Item onClick={() => onSetCurrentPage(n)} key={n} active={n === currentPage}>{n}</Pagination.Item>
        ))}
      </Pagination>
      {loading
        ? <Spinner animation="border" variant="primary" style={{ display: 'block', margin: '20px auto' }} />
        : <UserCard>
          {users.map(user => (
            <Card key={user.id}>
              <NavLink to={`/profile/${user.id}`}>
                <Card.Img variant="top" src={user.photos.small || userLogo} />
              </NavLink>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.status}</Card.Text>
                {user.followed
                  ? <Button variant="danger" onClick={() => dispatch(unFollow(user.id))}>unfollow</Button>
                  : <Button onClick={() => dispatch(follow(user.id))}>follow</Button>}
              </Card.Body>
            </Card>
          ))}
        </UserCard>}
    </div>
  )
}

export default Users
