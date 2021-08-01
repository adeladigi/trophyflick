import React, {useState, Component} from "react";



import "./Body.css";
import ShowCase from "./ShowCase";
import SideMenu from "./SideMenu";





function Body(props){
    


 const [newChosenMovie, setNewChosenMovie] = useState({
    img: props.content[0].img, 
    title: props.content[0].title, 
    about: props.content[0].about,
    trailer: props.content[0].trailer
   })

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

   let key = "&apikey=84519f3d";

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
          <ShowCase movie={props.content} chosen={newChosenMovie} cardInfo={dataCard} />
          <SideMenu movie={props.content} mailFunc={iGotMail} listTitle={props.listTitle} emptyFlag={props.emptyFlag}  />
       </div>
   )
}

export default Body;











// React.useEffect(() => {
//    async function getISS (movie){

//          let key = "&apikey=84519f3d";
      
//             //declaring url structure
//             const requestUrl = "http://www.omdbapi.com/?t="+movie+"&plot=full"+key;
//             //requesting data from API
//             const response = await fetch(requestUrl);
//             const data = await response.json();
      
//               console.log( data)
//               //console.log(data.Ratings)
//               if(typeof data.Director === "undefined"){
      
//                const  apiOBJ = { 
//                   director: "N/A",
//                   actors: "N/A",
//                   ratings: {src: "N/A", rate: "N/A"},
//                   awards: "N/A"
//                }
//                setDataCard(apiOBJ)
//                console.log(apiOBJ) 
      
//               }else if(typeof data.Ratings === "undefined" || data.Ratings.length === 0){
      
//                const  apiOBJ = { 
//                   director: data.Director,
//                   actors: data.Actors,
//                   ratings: {src: "N/A", rate: "N/A"},
//                   awards: data.Awards
//                }
//                setDataCard(apiOBJ)
//                console.log(apiOBJ) 
      
//               } else if(typeof data.Ratings[1] === "undefined"){
      
                
//                const  apiOBJ = { 
//                   director: data.Director,
//                   actors: data.Actors,
//                   ratings: {src: data.Ratings[0].Source, rate: data.Ratings[0].Value},
//                   awards: data.Awards
//                }
//                setDataCard(apiOBJ)
//                console.log(apiOBJ) 
      
//               } else if(data.Ratings[1].Source){
      
//                const  apiOBJ = { 
//                   director: data.Director,
//                   actors: data.Actors,
//                   ratings: {src: data.Ratings[1].Source, rate: data.Ratings[1].Value},
//                   awards: data.Awards
//                }
//                setDataCard(apiOBJ)
//                console.log(apiOBJ) 
      
//               }
      
              
      
         
//         }
//    fetchData();
//  }, []);









// async function getISS (movie){

//    let key = "&apikey=84519f3d";

//       //declaring url structure
//       const requestUrl = "http://www.omdbapi.com/?t="+movie+"&plot=full"+key;
//       //requesting data from API
//       const response = await fetch(requestUrl);
//       const data = await response.json();

//         console.log( data)
//         //console.log(data.Ratings)
//         if(typeof data.Director === "undefined"){

//          const  apiOBJ = { 
//             director: "N/A",
//             actors: "N/A",
//             ratings: {src: "N/A", rate: "N/A"},
//             awards: "N/A"
//          }
//          setDataCard(apiOBJ)
//          console.log(apiOBJ) 

//         }else if(typeof data.Ratings === "undefined" || data.Ratings.length === 0){

//          const  apiOBJ = { 
//             director: data.Director,
//             actors: data.Actors,
//             ratings: {src: "N/A", rate: "N/A"},
//             awards: data.Awards
//          }
//          setDataCard(apiOBJ)
//          console.log(apiOBJ) 

//         } else if(typeof data.Ratings[1] === "undefined"){

          
//          const  apiOBJ = { 
//             director: data.Director,
//             actors: data.Actors,
//             ratings: {src: data.Ratings[0].Source, rate: data.Ratings[0].Value},
//             awards: data.Awards
//          }
//          setDataCard(apiOBJ)
//          console.log(apiOBJ) 

//         } else if(data.Ratings[1].Source){

//          const  apiOBJ = { 
//             director: data.Director,
//             actors: data.Actors,
//             ratings: {src: data.Ratings[1].Source, rate: data.Ratings[1].Value},
//             awards: data.Awards
//          }
//          setDataCard(apiOBJ)
//          console.log(apiOBJ) 

//         }

        

   
//   }