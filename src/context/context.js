import { useContext, createContext } from 'react'
import { useFetch } from '../utils/useFetch'

export const API_URI =
  'http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles'

const AppCtx = createContext()

const AppProvider = ({ children }) => {
  const { error, data: articles } = useFetch(API_URI)

  return (
    <AppCtx.Provider value={{ error, articles }}>
      {children}
    </AppCtx.Provider>
  )
}

export const useAppCtx = () => {
  return useContext(AppCtx)
}

export { AppCtx, AppProvider }
