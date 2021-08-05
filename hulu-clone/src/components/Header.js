import React, {useState} from 'react';
import HeaderItem from './HeaderItem';
 
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";


function Header({searcher, openSearchBar}) {
    const [search , setSearch]= useState(false)
    const [text, setText]=useState('')
    const [movieToSearch, setMovieToSearch]= useState('')

 
    

     
    return (
         
        <header className = 'flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
         
        <div className = 'flex flex-grow justify-evenly max-w-2xl'
        > 
        <HeaderItem title= "HOME" Icon ={HomeIcon}/>
        <HeaderItem title= "TRENDING" Icon ={LightningBoltIcon}/>
        <HeaderItem title= "VERIFIED" Icon ={BadgeCheckIcon}/>
        <HeaderItem title= "COLLECTIONS" Icon ={CollectionIcon}/>
        <div  onClick= {()=> openSearchBar()}  > 
        <HeaderItem title= "SEARCH" Icon ={SearchIcon}
            
        
          />
          </div> 
         <HeaderItem title= "Account" Icon ={UserIcon}/>
        </div>
         
               
            

      
        
            

         
        <img
        className = "h-40 w-80 "
        src = 'https://links.papareact.com/ua6'
        
          
        
        />
    </header>
    )
}

export default Header
