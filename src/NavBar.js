import React from "react";

import "./NavBar.css";
import NavItems from "./NavItems";



function NavBar(props){
  
  

  function sendList(listObj){
    props.movieListFunc(listObj)
  }

  function turnOnArticles(){
    props.openArticles()
  }

  function turnOffArticles(){
    props.closeArticles()
  }

  function handleFirst(newFirst){
    props.handleNewFirst(newFirst)
    
  }

  return (
      <nav>
        <NavItems turnOffArticles={turnOffArticles} openArticles={turnOnArticles} articleFlag={props.articleFlag} selectFunc={sendList} handleFirst={handleFirst}/>
      </nav>
  )
}

export default NavBar;