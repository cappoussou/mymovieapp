import React, {useState} from 'react'
import './App.css';
import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie';
import MoviesContainer from './Component/MoviesContainer';
import {movie}  from './Component/MovieData';


const App = () => {
const [movies,setMovies] = useState(movie);

const [test, setTest]=useState(true);
const [testSearch, setTestSearch]=useState(false);
const [searchList, setSearchList]=useState(movies);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
    setTestSearch(false);
  }

  function handleFunction() { setTest(!test); }

  function searchByName(movieSearch) {
    setSearchList(movies.filter(el => el.name.toUpperCase().startsWith(movieSearch.toUpperCase())));
    setTestSearch(true);
  }

  function searchByRate(rateSearch) {
    setSearchList(movies.filter(el => el.rate == rateSearch));
    setTestSearch(true);
    rateSearch==="" && setTestSearch(false);
  }
  return (
    <div className='app' >
      {test? <div className="App"><MovieList movies={!testSearch? movies: searchList} 
      searchByName={searchByName} searchByRate={searchByRate}/>
      <MoviesContainer movies={!testSearch? movies: searchList} handleFunction={handleFunction}/> </div>
      :<AddMovie addMovie={addMovie} handleFunction={handleFunction}/>}
    </div>
  )}
export default App;