import React from 'react';
import propType from 'prop-types';
import './Movie.css';


function MoviePoster({poster}){
    return( 
        <img src = {poster} alt="Movie Poster"/>
    )
}

function Movie({title, poster}) {

    return( 
        <div>
        <MoviePoster poster={poster}/>
    <h1>{title}</h1>
    </div>
    )

}

Movie.propType ={

    title:propType.string.isRequired,
    poster:propType.string.isRequired


}

MoviePoster.propType ={

    poster:propType.string.isRequired


}
 export default Movie
    