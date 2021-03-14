import React from 'react'
import './Post.scss'

const Post = ({ message, likesCount }) => {
  return (
    <div className="post">
      <img className="avatar" src="https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg" alt="Avatar" />
      <div>{message} - <span>{likesCount}</span></div>
    </div>
  )
}

export default Post