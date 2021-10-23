import React, {useState, useEffect} from "react";


//import recList from "./recList";
import "./App.css";
import NavBar from "./NavBar";
import Body from "./Body";

import movieData from "./movieData";
import recList from "./recList";
import articlesDB from "./articlesDB";
import Loader from "./Loader";




let light = false;




function App() {

  const [ loading, setLoading] = useState(false);
  let loaded = false;

  useEffect(() => {
    setLoading(true)

    // setTimeout(() => {
    //   setLoading(false)
    // }, 8000)

  }, [])

  window.addEventListener("load", function(){
    setLoading(false)
   })


 
  const [ chosenList, setChosenList] = useState(movieData);
  const [ emptyFlag, setSetEmptyFlag] = useState(false);
  const [ articleFlag, setArticleFlag] = useState(false);
  const [ firstInList, setFirstInList] = useState(articlesDB[0])
  //const [infoCard, setInfoCard] = useState(firstMovieObj);
  
  
 

  const [ listTitle, setListTitle] = useState("")

  function mailSelectedList(newList){
      setChosenList(newList)
      let lastList = newList;
     if(light === false){
       light = true;
     }else{
       light = false;
     }
  }


  

  //------------------- Search Bar Functions -----------------------



     // Relevancy function
     function getRelevancy(value, searchTerm){
      if(value === searchTerm){
          
          return 2;
      }else if(value.startsWith(searchTerm)) {
  
          return 1;
      }else if (value.includes(searchTerm)) {
  
          return 0;
      }
    
  }

  
// Search bar function
  function searchFunc(event){
     
    let searchText = event.target.value;

    
    // Start of filter function
      let searchArray = chosenList.filter(function(movie){    

      return movie.title.toLocaleLowerCase().includes(searchText)
    }).sort((movieA,  movieB) => {
       return getRelevancy(movieB.title, searchText) - getRelevancy(movieA.title, searchText);
    })
    
      

      if(searchArray.length === 0){
        
        setSetEmptyFlag(true)
      }else if(searchText.length === 0){

        //embeded if statement
         if(light === false && articleFlag === false){
          setSetEmptyFlag(false)
          setChosenList(movieData)
         }else if(light === true && articleFlag === false){
          setSetEmptyFlag(false) 
          setChosenList(recList)
         }else if(articleFlag === true){
          setSetEmptyFlag(false) 
          setChosenList(articlesDB)
         }

      }else{
        setSetEmptyFlag(false) 
        setChosenList(searchArray)
      }

    
  }


  function openArticles(){
    setArticleFlag(true) 
  }

  function closeArticles(){
    setArticleFlag(false) 
  }

  function handleNewFirst(newFirst){
   setFirstInList(newFirst)
  }



    if(loading === true){
      return(

        <div className="loader-div">
          
            <Loader loading={loading}/>
        
        </div>
          
      )

    }else{

      return (
        <div>
    
        <NavBar articleFlag={articleFlag} openArticles={openArticles} closeArticles={closeArticles} movieListFunc={mailSelectedList} handleNewFirst={handleNewFirst} />
         <div className="input-div" >
          <input className="s-bar"  onInput={searchFunc}  type="text" placeholder="search" content="width=device-width, initial-scale=1, maximum-scale=1" />
         </div>
        <Body articleFlag={articleFlag} content={chosenList} listTitle={listTitle} emptyFlag={emptyFlag} firstInList={firstInList} />
    
        </div>
      );

    }


}

export default App;







