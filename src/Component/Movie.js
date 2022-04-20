import React from 'react'
import { useParams } from 'react-router'
import { movie }  from './MovieData';
import YouTube from 'react-youtube';
import App from '../App';

 


      

const Movie = () => {
  const { ID } = useParams();
  const movieData = movie.find(el => el.id == ID);
  return (

    <div className='movie'>
      <h1>{movieData.name}</h1> 
      <h1>{movieData.Description}</h1>
      <h1>{movieData.rate}</h1>
      <center>
      <YouTube videoId={movieData.link}  />
      <button className='Back' onClick={()=>{window.location.href='/'}}>Back</button>
      </center>

    </div>
    
  )
  
}

export default Movie
