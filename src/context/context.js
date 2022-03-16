import { useContext, useEffect, createContext } from 'react'
import { useFetch } from '../utils/useFetch'

export const API_URI = process.env.REACT_APP_API_URI

export const AppCtx = createContext()

export const AppProvider = ({ children }) => {
  const { isLoading, error, data: articles } = useFetch()

  return (
    <AppCtx.Provider value={{ isLoading, error, articles }}>
      {children}
    </AppCtx.Provider>
  )
}

export const useAppCtx = () => {
  return useContext(AppCtx)
}
