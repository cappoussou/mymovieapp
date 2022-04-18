import React, {useState} from 'react'
import './App.css';
import MovieList from './Component/MovieList'
import Asabove from './Images/As Above So Below.jpeg'
import BlackWidow from './Images/Black Widow.jpeg'
import Captain from './Images/Captain Marvel.jpeg'
import MrClean from './Images/Mr Clean.jpeg'
import Robocop from './Images/Robocop.jpeg'
import TheAssassin from './Images/theAssassin.jpeg'
import AddMovie from './Component/AddMovie';
import MoviesContainer from './Component/MoviesContainer';


const App = () => {
const [movies,setMovies] = useState([
  //Movies array
  {name:'As Above So Below',Description:'m1 desc', image: Asabove ,rate:4},
  {name:'Black Widow',Description:'m2 desc', image: BlackWidow,rate:5},
  {name:'Captain Marvel',Description:'m3 desc',image:Captain ,rate:3},
  {name:'Mr Clean',Description:'m4 desc', image:MrClean ,rate:2},
  {name:'Robocop',Description:'m5 desc', image:Robocop ,rate:5},
  {name:'The Assassin',Description:'m6 desc', image:TheAssassin ,rate:1},
]);

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
    rateSearch=="" && setTestSearch(false);
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