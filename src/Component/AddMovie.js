import React, { useState } from 'react';
function AddMovie ({addMovie, handleFunction}) {
    const [newMovie,setNewMovie]=useState({name:"", Description:"", image:"", rate:0});
    const inputFunction=(e)=> {
        setNewMovie({...newMovie, [e.target.name]:e.target.value})
    }
    return (
        <div className="AddMovie">
        <form>
            <div>
            <label>Movie Name:</label>
            <input type="text" name="name" placeholder="Write the movie name" required onChange={inputFunction} 
            onChange={inputFunction}/>
            </div>
            <div>
            <label>Description: </label>
            <input type="text" name="date" placeholder="Write the Description" required onChange={inputFunction}/>
            </div>
            <div>
            <label>&nbsp; Image URL: </label>
            <input type="text" name="image" placeholder="Paste the URL of a web image" required onChange={inputFunction}/>
            </div>
            <div>
            <label> Movie Rate: </label>
            <input type="number" name="rate" placeholder="Enter the movie's rate" required onChange={inputFunction}/>
            </div>
            
            
            <button type="submit" style={{paddingBottom:20}}
            onClick={e=>{e.preventDefault();addMovie(newMovie); handleFunction()}}>ADD</button>
        </form>
        </div>
    )
}
export default AddMovie;