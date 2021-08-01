import React from "react";

import "./Card.css";



function Card(props){
    
    let newSideMenuTitle = props.title;

    function sendMovieUp(){
        props.choseFunc({img: props.src, title: props.title, about: props.about, trailer: props.trailer})
    }


   return(
             <div className="card">
             <div className="img-div" style={{backgroundImage: "url("+props.src+")"}}></div> 
             <h4 onClick={sendMovieUp}>{props.title}</h4>
            </div>  
   )
}

export default Card;