import logo from "./logo.svg";
 
import axios from "axios";
import React, { useState, useEffect } from "react";
import './requests';
import requests from "./requests";
import Results  from "./components/Results";
 import Header from './components/Header';
const API_KEY = "32f21cfa647f7c3b7282a6473a7cfdc4";

function App() {
  const [movies, setMovies] = useState([]);

 
  const baseUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres`

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(res =>setMovies(res.data.results))
  },[])

   
   

  const getGenre =(id)=> {
    axios.get( `${baseUrl}${API_KEY}&with_genres=${id}`)
    .then(res => setMovies(res.data.results))
  }

   return (
    <div className="App">
      
      {/* <Header/> */}
      <nav> 
      <div className ='flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide '>
                  
      {requests.map (r=> {
        return(

          
          <div className = 'nav-div'>
          <h4
           className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white
           active:text-red-500'


           onClick={()=> getGenre(r.num)   }
          
         
          
          
          
          >{r.genre} </h4>
          </div>
        )

      })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-{#06202A} h-10 w-1/2'/>

      </nav>

      <Results
      movies = {movies}
      
      />

      
    </div>
  );
}

export default App;
