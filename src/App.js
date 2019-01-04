import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'


class App extends Component {


  componentDidMount (){
    setTimeout(() =>{
     console.log("didmount")
     this.setState({
       
         movies: [
          //기존에 리스트를 두고 다른 영화 추가 
          
            {
            title : "test4444",
            poster : "https://image.fmkorea.com/files/attach/new/20180925/33854530/171192474/1287223589/d89c38ccdd48f215f5055afff8dc1be8.png",
            },
            {          
             title:"test1",
             poster: "http://image.chosun.com/sitedata/image/201705/08/2017050801699_0.jpg",
            },
            {
            title:"test3",
            poster: "https://image.fmkorea.com/files/attach/new/20180925/33854530/171192474/1287223589/d89c38ccdd48f215f5055afff8dc1be8.png",
            },
            {
              title : "test4444",
              poster : "https://image.fmkorea.com/files/attach/new/20180925/33854530/171192474/1287223589/d89c38ccdd48f215f5055afff8dc1be8.png"
            }
         ]
  
      })
  
    }, 4000)
  }
   
  
    _renderMovie = () => {
      console.log("rendermovie")  
      const movies = this.state.movies.map((movies, index) =>{               
        return <Movie title={movies.title} poster={movies.poster} key={index}/>       
      })
      return movies
  
    }
    //render 모든걸 보여주는 역활
    render() {
       return (     
        <div className ="APP">
           
        </div>
      );
    }
  }
  

export default App;
