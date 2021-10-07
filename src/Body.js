import React, {useState, useEffect ,Component} from "react";

import "./Body.css";
import ShowCase from "./ShowCase";
import SideMenu from "./SideMenu";



function Body(props){
   // place object from top of the list.
   

 const [newChosenMovie, setNewChosenMovie] = useState({
    img: props.content[0].img, 
    title: props.content[0].title, 
    about: props.content[0].about,
    headings: props.content[0].headings,
    pics: props.content[0].pics,
    posted: props.content[0].posted,
    author: props.content[0].author,
    trailer: props.content[0].trailer
   })

   
   useEffect(() => {
      //setting new chosen movie
      setNewChosenMovie({
         img: props.content[0].img, 
         title: props.content[0].title, 
         about: props.content[0].about,
         headings: props.content[0].headings,
         pics: props.content[0].pics,
         posted: props.content[0].posted,
         author: props.content[0].author,
         trailer: props.content[0].trailer
      })
      // new api requset with new title
      getISS(props.content[0].title)
    }, [props.firstInList, props.content[0].title ], );


   //  useEffect(() => {
  
  
   //  }, [], );



  let oldObj = {
   director: "Roman Polanski",
     actors: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
    ratings: {src: "Rotten Tomatoes", rate: "95%"},
     awards: "Won 3 Oscars. 57 wins & 74 nominations total"  
   }

 

   const [dataCard, setDataCard] = useState(oldObj)

   function iGotMail(mail){
      setNewChosenMovie(mail)
      
    getISS (mail.title.toLowerCase())
    
   }  


   async function getISS(movie){

   let key = process.env.REACT_APP_MOVIE_KEY;
   

      //declaring url structure
      const requestUrl = "http://www.omdbapi.com/?t="+movie+"&plot=full"+key;
      //requesting data from API
      const response = await fetch(requestUrl);
      const data = await response.json();

        
        //console.log(data.Ratings)
        if(typeof data.Director === "undefined"){

         const  apiOBJ = { 
            director: "N/A",
            actors: "N/A",
            ratings: {src: "N/A", rate: "N/A"},
            awards: "N/A"
         }
         setDataCard(apiOBJ)
         

        }else if(typeof data.Ratings === "undefined" || data.Ratings.length === 0){

         const  apiOBJ = { 
            director: data.Director,
            actors: data.Actors,
            ratings: {src: "N/A", rate: "N/A"},
            awards: data.Awards
         }
         setDataCard(apiOBJ)
          

        } else if(typeof data.Ratings[1] === "undefined"){

          
         const  apiOBJ = { 
            director: data.Director,
            actors: data.Actors,
            ratings: {src: data.Ratings[0].Source, rate: data.Ratings[0].Value},
            awards: data.Awards
         }
         setDataCard(apiOBJ)
          

        } else if(data.Ratings[1].Source){

         const  apiOBJ = { 
            director: data.Director,
            actors: data.Actors,
            ratings: {src: data.Ratings[1].Source, rate: data.Ratings[1].Value},
            awards: data.Awards
         }
         setDataCard(apiOBJ)
         

        }
 
  }
 
  

   return(
       <div className="body-div">
          <ShowCase articleFlag={props.articleFlag} movie={props.content} chosen={newChosenMovie} cardInfo={dataCard}  />
          <SideMenu articleFlag={props.articleFlag} movie={props.content} mailFunc={iGotMail} listTitle={props.listTitle} emptyFlag={props.emptyFlag}  />
       </div>
   )
}

export default Body;

