import React, { useState, useEffect } from 'react'

export const useFetch = () => {
  const API_URI =
    'http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles'

  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)

  const fetchArticles = async (url) => {
    try {
      const response = await fetch(url)
      console.log(response)
      const data = await response.json()

      if (!data) {
        setError({ show: true, msg: data.error })
      }

      setData(data)
    } catch (err) {
      console.error(err)
    }

    useEffect(() => {
      fetchArticles(API_URI)
    }, [])

    return { error, data }
  }
}
