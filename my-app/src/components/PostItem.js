import React from 'react'

function PostItem(props) {
  const post = props.post
  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Artist: {post.name}</p>
      <img src={post.image}></img>
      <p>Description: {post.description}</p>
    </div>
  )
}

export default PostItem