import React from "react";

import "./NavItems.css";
import recList from "./recList";
import movieData from "./movieData";
import articlesDB from "./articlesDB";





function NavItems(props){

    
  function FavMoviesSelected(){
    let firstItem = movieData[0];
    
    props.handleFirst(firstItem);
     props.selectFunc(movieData)
     props.turnOffArticles()
  }

  function recMoviesSelected(){
    let firstItem = recList[0];
    
    props.handleFirst(firstItem);
    props.selectFunc(recList)
    props.turnOffArticles()
  }

   function articleOn(){
    let firstItem = articlesDB[0];
    
    props.handleFirst(firstItem);
    props.openArticles()
    props.selectFunc(articlesDB)
   }

    return(
      <div className="nav-items">
       <h1>TROPHY FLICK</h1>
       <div className="menu-list-div">
       <h3 onClick={articleOn}>Articles</h3>  <h3 onClick={FavMoviesSelected}>Favorite</h3>  <h3 onClick={recMoviesSelected}>Recommmened</h3>
       </div>
      </div>
    )
}


export default NavItems;