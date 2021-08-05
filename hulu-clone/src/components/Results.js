import React from 'react'
 
function Results({movies}) {



    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex
        
        ">
           
              
            {movies.map((m) => {
                // console.log("MOVIES", movies)
        return (
          <div key = {m.id}
          className = "p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z -50">

          
  
              <img 
              className = 'h-1000 w-1920'
              
              src = {`${BASE_URL}${m.backdrop_path || m.poster_path} `}  />


              <div>
                    <p className= 'truncate max-w-md'>{m.overview}</p> 

                     <h2 className= "mt-1 text 2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                        {m.title || m.original_name}
                     </h2>

                     <p className = 'flex items-center opacity-0 group-hover:opacity-100'>
                         {m.media_type && `${m.media_type }*`}{""}
                         {m.release_date || m.first_air_date}* {" "}
                     </p>
                    
                    </div>
          </div>
        );
      })}
            
        </div>
    )
}

export default Results
