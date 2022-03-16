import React from 'react'
import Articles from './components/Articles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Articles />}></Route>
        <Route path="/articles/:id" element={<SingleArticle />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
