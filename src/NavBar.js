import React from "react";

import "./NavBar.css";
import NavItems from "./NavItems";



function NavBar(props){
  
  function sendList(listObj){
    props.movieListFunc(listObj)
  }

  return (
      <nav>
        <NavItems selectFunc={sendList} />
      </nav>
  )
}

export default NavBar;