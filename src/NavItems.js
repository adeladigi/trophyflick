import React from "react";

import "./NavItems.css";
import recList from "./recList";
import movieData from "./movieData";





function NavItems(props){
    
  function FavMoviesSelected(){
     props.selectFunc(movieData)
  }

  function recMoviesSelected(){
    props.selectFunc(recList)
 }

    return(
      <div className="nav-items">
       <h1>My Favorite Movies</h1>
       <div className="menu-list-div">
         <h3 onClick={FavMoviesSelected}>Favorite</h3>  <h3 onClick={recMoviesSelected}>Recommmened</h3>
       </div>
      </div>
    )
}


export default NavItems;