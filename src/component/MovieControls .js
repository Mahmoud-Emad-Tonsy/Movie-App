import React from 'react'
import * as actions from "./Context/ActionTypes"
import { useMovieContext } from './Context/GlobalContext'

const MovieControls  = ({movie , type}) => {
  
  const MovieContext = useMovieContext () ;
    return (

    <div className='inner-card-controls'>
    
    { 
      type === "watchlist" && (
      
      <>
      
      <button onClick={()=> MovieContext.MoviesDispatch({
      type : actions.ADD_MOVIE_TO_WATCHED,
       payload : movie


})} className='ctrl-btn'>

<i className='fa-solid fa-eye'/> 

</button>






<button onClick={()=> MovieContext.MoviesDispatch({
  type : actions.REMOVE_MOVIE_FROM_WATCHLIST,
  payload : movie.imdbID
  
      })} className='ctrl-btn'>
 <i className='fa-fw fa fa-times'/>
 </button> 
    
    
    </>
   
    ) }



    { type === "watched" && (
      
      <>  
      
      <button  
      onClick={()=> MovieContext.MoviesDispatch({ type : actions.MOVE_TO_WACHLIST, payload : movie })} 
      
      className='ctrl-btn'> 
      
      <i className='fa-solid fa-eye-slash'/>

       </button>
       
       
       <button  onClick={()=> MovieContext.MoviesDispatch({
        type : actions.REMOVE_MOVIE_FROM_WATCHED,
        payload : movie.imdbID 
      })}
        className='ctrl-btn'> <i className='fa-fw fa fa-times'/></button>
       
       </>
   

    ) }



    
    
    </div>
  )
}


export default MovieControls 