import React, {Component} from 'react';
import propType from 'prop-types';

import './Movie.css';

class Movie extends Component { 


    static propType = {
        title: React.propType.string.isRequired,
        poster: React.propType.string.isRequired

    }
    render(){
        console.log(this.props)
        return(
            <div>
             <MoviePoster poster={this.props.poster}/>
         <h1>{this.props.title}</h1>
         </div>
        )
      }
 }  

 class MoviePoster extends Component {

    static propType = {

        poster: propType.string.isRequired
    }

    render(){
        console.log(this.props)
        return(
            <img src ={this.props.poster}/>
       )

    }

 } 
 export default Movie
    