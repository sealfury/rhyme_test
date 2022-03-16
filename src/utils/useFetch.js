import React, { useState, useEffect } from 'react'

export const useFetch = () => {
  const API_URI = process.env.REACT_APP_API_URI

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)

  const fetchArticles = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (!data) {
        setError({ show: true, msg: data.error })
      }

      setData(data)
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }

    useEffect(() => {
      fetchArticles(API_URI)
    }, [])

    return { isLoading, error, data }
  }
}
