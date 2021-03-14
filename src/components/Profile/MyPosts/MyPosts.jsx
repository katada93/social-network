import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post/Post'
import { addPost } from '../../../redux/profile'

import './MyPosts.scss'


const MyPosts = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const posts = useSelector(({ profile }) => profile.posts)

  const postsElements = posts
    .map(({ id, message, likesCount }) => <Post key={id} id={id} message={message} likesCount={likesCount} />)

  const onAddPost = () => {
    dispatch(addPost(value))
    setValue('')
  }
  return (
    <div>
      <h2>My posts</h2>
      {postsElements}

      <div className="add-post">
        <textarea onChange={(e) => setValue(e.target.value)} placeholder="Enter text" value={value} />
        <button onClick={onAddPost}>Add new Post</button>
      </div>
    </div >
  )
}

export default MyPosts