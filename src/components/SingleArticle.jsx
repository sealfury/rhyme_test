import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppCtx } from '../context/context'

const SingleArticle = () => {
  const [editing, setIsEditing] = useState(false)
  const { id } = useParams()
  const { viewArticle } = useAppCtx()
  const { title, author, description, body } = viewArticle(id)

  const onSubmit = (e) => {
    e.preventDefault()
    // business logic goes here
    setIsEditing(false)
  }

  return (
    <>
      <h2>Single Article Page</h2>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      <p>{body}</p>
      <button onClick={() => setIsEditing(true)}>Edit This Article</button>
      {editing && (
        <form onSubmit={onSubmit}>
          <div>
            <label>Title</label>
            <input type="text" value="placeholder value fn" />
            <label>Author</label>
            <input type="text" value="and so forth for other article fields" />
          </div>
        </form>
      )}
    </>
  )
}

export default SingleArticle
