import React from 'react';
import propType from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {

    return( 
        <div className ="Movies">
         <div className ="Movies_Columns">
         <MoviePoster poster={poster} alt={title}/>
          </div>
        <div className ="Movies_Columns">
          <h1>{title}</h1>
          <div className ="Movie_Genres">   
            {genres.map((genre, index)=> 
            <Moviegenre genre={genre} key={index}/>)}
        </div> 
        <p className ="Movies_Synosis">
           {synopsis}
        </p>    
      </div>
    </div>
    )

}

function MoviePoster({poster, alt}){
    return( 
        <img src = {poster} alt ={alt} title={alt} 
        className ="Movie_Poster"/>
    )
}


function Moviegenre({genre}){
    return (
     <span className ="Movie_Genre">{genre}</span>
             
    )

}

Movie.propType ={

    title:propType.string.isRequired,
    poster:propType.string.isRequired,
    genres:propType.string.isRequired,
    synopsis:propType.string.isRequired

}

Moviegenre.propType ={

    genres:propType.string.isRequired

}

MoviePoster.propType ={

    poster : propType.string.isRequired,
    alt : propType.string.isRequired
}

 export default Movie
    