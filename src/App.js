import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

const movies = [
  {
    id:1,
     title:"test1",
    poster: "http://image.chosun.com/sitedata/image/201705/08/2017050801699_0.jpg"
  },

  {
    id:2,
    title:"test2",
    poster: "http://file1-1.bobaedream.co.kr/multi_image/strange/2016/11/30/10/BhY583e250fe3677.jpg"
  },

  {
    id:3,
    title:"test3",
    poster: "https://image.fmkorea.com/files/attach/new/20180925/33854530/171192474/1287223589/d89c38ccdd48f215f5055afff8dc1be8.png"
  }
]

class App extends Component {
  //render 모든걸 보여주는 역활
  render() {
    return (
      <div className ="APP">

      {movies.map((movies, index) =>{
        
        return <Movie title={movies.title} poster={movies.poster} key={index}/>
       
      })}  



      </div>
    );
  }
}

export default App;
