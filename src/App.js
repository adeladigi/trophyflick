import React, {useState} from "react";

import movieData from "./movieData";
//import recList from "./recList";
import "./App.css";
import NavBar from "./NavBar";
import Body from "./Body";
import recList from "./recList";



let light = false;




function App() {


 
  const [ chosenList, setChosenList] = useState(movieData);
  const [ emptyFlag, setSetEmptyFlag] = useState(false);
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
         if(light === false){
          setSetEmptyFlag(false)
          setChosenList(movieData)
         }else{
          setSetEmptyFlag(false) 
          setChosenList(recList)
         }

      }else{
        setSetEmptyFlag(false) 
        setChosenList(searchArray)
      }

    
  }



  return (
    <div>

    <NavBar movieListFunc={mailSelectedList}/>
     <div className="input-div" >
      <input className="s-bar"  onInput={searchFunc}  type="text" placeholder="search" content="width=device-width, initial-scale=1, maximum-scale=1" />
     </div>
    <Body content={chosenList} listTitle={listTitle} emptyFlag={emptyFlag}  />

    </div>
  );
}

export default App;




// 1# must fix space

// 2# add if none in list function






