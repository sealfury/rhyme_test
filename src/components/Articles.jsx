import React, { useState } from 'react'
import { Article } from '../models/article.model'
import { useFetch } from '../utils/useFetch'

const Articles = () => {
  const { isLoading, error, data } = useFetch(process.env.REACT_APP_API_URI)

  const [articles, setArticles] = useState(data)



  return (
    <>
      <h1>
        Article list
      </h1>
    </>
  )
}

export default Articles