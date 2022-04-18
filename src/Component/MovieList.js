import React from 'react';

function MovieList({ searchByName, searchByRate}) {
    return (
        <div>
       
            <input type="text" placeholder="Search by name" className="search" 
            style={{fontFamily:'Arial, FontAwesome'}} 
            onChange={e=>searchByName(e.target.value)}></input>
        
            <input type="number" placeholder="Search by rate" className="search" 
            style={{fontFamily:'Arial, FontAwesome'}}
            onChange={e=>searchByRate(e.target.value)}></input>
      
        </div>
    ) 
}
export default MovieList;