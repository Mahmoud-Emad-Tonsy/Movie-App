import React from 'react'
import MovieCard from './MovieCard';
import { useMovieContext } from './Context/GlobalContext'
import './WatchList.css'

const WatchedList = () => {
  const MovieContext = useMovieContext();
  return (
    <div className='watch-list'>
   <div className='container'>
   <div className='main-heading'>
   <h1>My Watchlist</h1>
   <span className='movies-count'>
   {MovieContext.watchlist.length}
   {MovieContext.watchlist.length === 1 ? "Movie" : "Movies"}
   
   
   </span>

   </div>
 {MovieContext.watchlist.length > 0 ? (<div className='movie-grid'>
 
 {MovieContext.watchlist.map((movie)=>(


<MovieCard key={movie.imdbID} movie ={movie} type = "watchlist"/>
 ))}
 </div>) : <h2 className='messg-show'> No Movies in Your List, Add Some</h2>}
   
   
   
   
   </div>
    
    </div>
  )
}

export default WatchedList