import React, {useEffect, useState} from "react";

import "./ShowCase.css";
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsInstagram} from 'react-icons/bs';
import { MdAttachEmail} from 'react-icons/md';



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
      trailer: props.chosen.trailer,
      picOne: props.chosen.picOne,
      picTwo: props.chosen.picTwo,
      picThree: props.chosen.picThree,
      heading1: props.chosen.heading1,
      heading2: props.chosen.heading2,
      heading3: props.chosen.heading3,
      heading4: props.chosen.heading4,
      heading5: props.chosen.heading5,
      heading6: props.chosen.heading6,
    } 
    
    
   function changeState(){
      if(newState === false){
         setNewState(true)
      }else{
         setNewState(false)
      }
      
   }

   useEffect(() => {
     

  
    }, [])


   function createParagraph(paragraph){
      let key2 = process.env.ADSCENE_KEY;
      
      //<h3 id="article-title-mini">{props.chosen.headings[0]}</h3>
         return(
            <div>

             <h3 id="article-title-mini">{currentMovie.heading1}</h3>
             <p id="article-text">{paragraph[0]}</p>


             <amp-ad  width="100vw" height="320"
                     type="adsense"
                     data-ad-client="ca-pub-1027543823238054"
                     data-ad-slot="3110331842"
                     data-auto-format="rspv"
                     data-full-width="">
                  <div overflow=""></div>
             </amp-ad>
           
             <img id="article-img" src={props.chosen.picOne}></img>
             <h3 id="article-title-mini">{currentMovie.heading2}</h3>
             <p id="article-text">{paragraph[1]}</p>

             <img id="article-img" src={props.chosen.picTwo}></img>
             <h3 id="article-title-mini">{currentMovie.heading3}</h3>
             <p id="article-text">{paragraph[2]}</p>
             
             <img id="article-img" src={props.chosen.picThree}></img>
             <h3 id="article-title-mini">{currentMovie.heading4}</h3>
             <p id="article-text">{paragraph[3]}</p>

             <h3 id="article-title-mini">{currentMovie.heading5}</h3>
             <p id="article-text">{paragraph[4]}</p>

             <p id="article-text">{paragraph[5]}</p>

            </div>
            
         )
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
                  <div className="posted-ggg-div">
                  <p>posted</p><p>{currentMovie.posted}</p>
                  </div>
                  
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
            <div className="posted-ggg-div">
               <p>posted</p><p>{currentMovie.posted}</p>
            </div>
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

              <div className="social-icons-div">
                <a href="https://twitter.com/TrophyFlick" target="_blank"><AiFillTwitterCircle id="twitter-icon" className="icons-blueprint"/></a>
                <a href="https://www.instagram.com/trophyflick/" target="_blank"><BsInstagram id="instagram-icon" className="icons-blueprint"/></a>
                <a href="#"><MdAttachEmail id="email-icon" className="icons-blueprint"/></a>
                
              </div>

              <div className="author-date-div">
                <p className="author-info">BY {props.chosen.author}</p> <p id="post-date">{currentMovie.posted}</p>
              </div>
              
                <img id="article-img" src={currentMovie.img}></img>
                
                {createParagraph(currentMovie.about)}

                
             
           </div> 
          

         </div>
            
                
               
        )

    }

}

export default ShowCase;








