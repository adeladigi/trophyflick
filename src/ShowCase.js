import React, {useState, useEffect} from "react";

import "./ShowCase.css";



let defaultState = false;

function ShowCase(props){

   
   const [newState, setNewState] = useState(defaultState)

   let fatty = props.articleFlag;
   
   let currentMovie = { 
      img: props.chosen.img,
      title: props.chosen.title,
      about: props.chosen.about,
      posted: props.chosen.posted,
      auhtor: props.chosen.author,
      trailer: props.chosen.trailer
    } 
    
    
  

   function changeState(){
      if(newState === false){
         setNewState(true)
      }else{
         setNewState(false)
      }
      
   }


    if(newState === true && fatty === false){
      return(
         <div className="main-section"> 
            <div className="showcase-div" >
               
     
               <iframe 
               width="460" 
               height="230" 
               src={currentMovie.trailer} 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
               </iframe>

               <div className="trailer-div">
                  <h4 id="trailer-btn" onClick={changeState}>Back</h4>
               </div>
     
     
               <h2 id="movie-title">{currentMovie.title}</h2>
               <div className="content-div" >
               <p id="plot-text">{currentMovie.about}</p>
               </div>
               
            </div>  
            <div className="info-div">
               <div className="director-box">
                  <h1>Director</h1> <h2>{props.cardInfo.director}</h2>
               </div>
               <div className="actor-box">
                  <h1>Actors</h1> <h2>{props.cardInfo.actors}</h2>
               </div>
               <div className="rating-box">
                  <h1>Ratings</h1>
                  <div className="rating-dispay">
                     <h2>{props.cardInfo.ratings.src}</h2> <h2>{props.cardInfo.ratings.rate}</h2>
                  </div>
               </div>
               <div className="award-box">
                  <h1>Awards</h1>
                  <p>{props.cardInfo.awards}</p>


               </div>
               
            </div>
         </div>
        )
    }else if(newState === false && fatty === false){

      return(
         <div className="main-section"> 
            <div className="showcase-div">
            <div className="showcase-img" style={{backgroundImage: "url("+currentMovie.img+")"}} ></div>
            <div className="trailer-div">
            <h4 id="trailer-btn" onClick={changeState}>Watch Trailer</h4>
            </div>
               <h2 id="movie-title">{currentMovie.title}</h2>
               
               <div className="content-div">
               <p id="plot-text">{currentMovie.about}</p>
               </div>
               
            </div>

            <div className="info-div">
               <div className="director-box">
                  <h1>Director</h1> <h2>{props.cardInfo.director}</h2>
               </div>
               <div className="actor-box">
                  <h1>Actors</h1> <h2>{props.cardInfo.actors}</h2>
               </div>
               <div className="rating-box">
                  <h1>Ratings</h1>
                  <div className="rating-dispay">
                
                     <h2>{props.cardInfo.ratings.src}</h2> <h2>{props.cardInfo.ratings.rate}</h2>
                  </div>
               </div>
               <div className="award-box">
                  <h1>Awards</h1>
                  <p >{props.cardInfo.awards}</p>
               </div>
               
            </div> 
         </div>
        )
    }else if(fatty === true){

      return(

         <div className="article-main-section">

           <div className="page">
              <div className="article-title-div">
              <h3 id="article-title">{currentMovie.title}</h3>
              </div>

              <div className="author-date-div">
                <p className="author-info">BY {props.chosen.author}</p> <p id="post-date">{currentMovie.posted}</p>
              </div>
              
             <img id="article-img" src={currentMovie.img} ></img>
      
             <p id="article-text">{currentMovie.about}</p>
           </div> 
          

         </div>
            
                
               
        )

    }

}

export default ShowCase;








