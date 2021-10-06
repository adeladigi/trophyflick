import React from "react";

import "./Card.css";



function Card(props){

    let articleLight = props.articleFlag;
    
    let newSideMenuTitle = props.title;
   
    
    function sendMovieUp(){
        props.choseFunc({img: props.src, title: props.title, about: props.about, posted: props.posted, author: props.author, trailer: props.trailer})
        
        // area where you construct the chosen obj and send to showcase
    }


   return(
             <div className={articleLight ? "article-card" : "card"}>
             <div className="img-div" style={{backgroundImage: "url("+props.src+")"}}></div> 
             <h4 onClick={sendMovieUp}>{props.title}</h4>

             <div className={articleLight ? "posted-article-div" : "posted-movie-div"}>
             <p>posted</p><p>{props.posted}</p>
             </div>
             
            </div>  
   )
}

export default Card;
