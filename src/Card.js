import React from "react";

import "./Card.css";



function Card(props){

    let articleLight = props.articleFlag;
    
    let newSideMenuTitle = props.title;
   
    
    function sendMovieUp(){
        props.choseFunc({
                         img: props.src, 
                         title: props.title, 
                         about: props.about,  
                         posted: props.posted, 
                         author: props.author, 
                         trailer: props.trailer,
                         picOne: props.picOne,
                         picTwo: props.picTwo,
                         picThree: props.picThree,
                         heading1: props.heading1,
                         heading2: props.heading2,
                         heading3: props.heading3,
                         heading4: props.heading4,
                         heading5: props.heading5,
                         heading6: props.heading6,
                        })
                        
        // area where you construct the chosen obj and send to showcase
    }
    
    //console.log(props.heading1)
    
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
