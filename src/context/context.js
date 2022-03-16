import { useContext, createContext, useEffect, useReducer } from 'react'

import { Action } from './actions'
import reducer from './reducer'

const API_URI =
  'http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles'

const initialState = {
  isLoading: true,
  articles: [],
}

const AppCtx = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchArticles = async (url) => {
    dispatch({ type: Action.SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      dispatch({
        type: Action.SET_ARTICLES,
        payload: { articles: data },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const viewArticle = async (id) => {
    dispatch({ type: Action.SET_LOADING })
    try {
      const response = await fetch(`${API_URI}/${id}`)
      const data = await response.json()
      console.log(data)
      dispatch({
        type: Action.VIEW_ARTICLE,
        payload: { article: data },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const removeArticle = (id) => {
    dispatch({ type: Action.REMOVE_ARTICLE, payload: id })
  }

  useEffect(() => {
    fetchArticles(API_URI)
  }, [])

  return (
    <AppCtx.Provider value={{ ...state, removeArticle, viewArticle }}>
      {children}
    </AppCtx.Provider>
  )
}

export const useAppCtx = () => {
  return useContext(AppCtx)
}

export { AppCtx, AppProvider }
