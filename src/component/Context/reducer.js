
import * as actions from './ActionTypes'

export const reducer = (state , action)=>{

    // Case 1 ADD_MOVIE_TO_WATCHLIST
    // Case 2 REMOVE_MOVIE_FROM_WATCHLIST
    // Case 3 MOVE_TO_WACHLIST
    // Case 4 ADD_MOVIE_TO_WATCHED
    // Case 5 REMOVE_MOVIE_FROM_WATCHED

switch (action.type){

case  actions.ADD_MOVIE_TO_WATCHLIST:
    return {
    
        ...state , 
        watchlist:[action.payload, ...state.watchlist],

    };


    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
    return {
    
        ...state , 
        watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload),

    };


    case actions.MOVE_TO_WACHLIST:
    return {
    
        ...state , 
        watched: state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID),

        watchlist : [action.payload , ...state.watchlist],

    };


    //Watched Cases
    
case actions.ADD_MOVIE_TO_WATCHED:
    return {
    
        ...state,
            watchlist : state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID),
            watched : [action.payload , ...state.watched]

       

    };

    case actions.REMOVE_MOVIE_FROM_WATCHED:
    return {
    
        ...state , 
        watched: state.watched.filter((movie) => movie.imdbID !== action.payload),

      
    };




    default : 
    return state ; 
}


}