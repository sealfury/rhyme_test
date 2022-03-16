import React, { useState } from 'react'
import { Article } from '../models/article.model'

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>()

  

  return (
    <>
      <h1>
        Article list
      </h1>
    </>
  )
}

export default Articles