import React from 'react'
import { useParams } from 'react-router'
const Movie = ({movies} ) => {
  const { ID } = useParams();
  console.log(movies);
  return (
    <div>Movie</div>
  )
}

export default Movie
