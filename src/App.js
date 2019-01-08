import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'


class App extends Component {

  state = {}

  componentDidMount (){
    this._getMovies();
  }
   
  
    _renderMovie = () => {   
     
      const movies = this.state.movies.map(movies =>{ 
      console.log(movies)         
        return <Movie 
        title={movies.title_english} 
        poster={movies.medium_cover_image} 
        key={movies.id} 
        genres={movies.genres}
        synopsis = {movies.synopsis}/>      
      })
      return movies
  
    }


    _getMovies = async () => {
      const movies = await this._callApi()
      this.setState({
        movies
      })
    }

    _callApi =() =>{

      return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(movielist => movielist.json())
      .then(json=> json.data.movies)       
      .catch(err=> console.log(err))

    }

    //render 모든걸 보여주는 역활
    render() {
      const {movies} = this.state;
       return (     
        <div className ={movies? "App": "App--loding"}>     
           {this.state.movies? this._renderMovie(): 'Loading'}
        </div>
      );
    }
  }
  

export default App;
