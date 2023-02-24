import React, { useState , useEffect } from 'react'
import "./Add.css";
import ResultCard from "./ResultCard"
import axios from 'axios';
const Add = () => {
  const [searchValu , setSearchValu]=useState("");
  const [movies , setMovies]=useState([]);
  useEffect(()=>{

axios.get(`https://www.omdbapi.com/?s=${searchValu} man&apikey=9a92b663`)
.then((response)=>{

  if(response.data.Search){

    setMovies(response.data.Search)
  }
}).catch((error)=>{console.log(error)})

  } , [searchValu])

  return (
    <div className='add-page'>
    <div className='container' >
    <div className='add-content'>
    <div className='input-container'>
    
    <input type='text' placeholder='Search For a Movie'
    value={searchValu}
    onChange ={(e)=> setSearchValu(e.target.value)}
    
    
    />
    
    </div>
    
    {
      movies.length > 0 && <ul className='result'>
    
    
      {movies.map((movie)=>(<li key={movie.imdbID}> 
        
        <ResultCard movie={movie}/>
        
        
        
        </li>))}
    
      </ul>
    
    
    }

    </div>
    
    </div>
    
    </div>
  )
}

export default Add