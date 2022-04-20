import React from 'react'
import App from '../App'
import {Routes,Route}from "react-router-dom"
import Movie from './Movie'


const Indexing = () => {
  return (
    <>
      <Routes>
        <Route    path="/" element={<App/>} />
        <Route    path="/Movie/:ID"  element={<Movie/>} />
      </Routes>
    </>

  )
}

export default Indexing
