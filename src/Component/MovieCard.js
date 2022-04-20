import React from 'react';
import { Typography,Rating } from '@mui/material';
import { Link } from "react-router-dom";
function MovieCard({movie}) {
    const r=[1,2,3,4,5,6];
    return (
    <div className='MovieCard' style={{padding:'10px'}}>
        <Link to={`/Movie/${movie.id} `}>
        <a target='_blank' title={movie.name}>
            <img src={movie.image} alt={movie.name} width="200px" height="300px"></img>
          {movie.name} 
          <br/>
          {movie.Description}
          <br/> 
        
        </a>

        <Typography component="legend"></Typography>
<Rating name="read-only" value={movie.rate} readOnly />
</Link>
    </div>
    )
}
export default MovieCard;