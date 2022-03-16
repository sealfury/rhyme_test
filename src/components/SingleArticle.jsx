import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppCtx } from '../context/context'

const SingleArticle = () => {
  const { id } = useParams()
  const { viewArticle } = useAppCtx()
  const { title, author, description, body } = viewArticle(id)

  return (
    <>
      <h2>Single Article Page</h2>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      <p>{body}</p>
    </>
  )
}

export default SingleArticle
