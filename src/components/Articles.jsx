import React, { useState } from 'react'
import { useAppCtx } from '../context/context'
import { useFetch } from '../utils/useFetch'

const Articles = () => {
  // const { articles, isLoading } = useAppCtx()
  const { articles } = useFetch(
    'http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles',
  )

  // if (isLoading) {
  //   return <div>Loading Loading</div>
  // }

  return (
    <section>
      {articles.map((article) => {
        const { id: _id, author, title, description } = article

        return (
          <article>
            <h4>{title}</h4>
            <h5>By: {author}</h5>
            <p>{description}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Articles
