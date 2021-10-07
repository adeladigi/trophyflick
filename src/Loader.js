import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Loader.css";

function Loader(props){
    return(
   
        <ClimbingBoxLoader
        color={"#FAEEE0"}
        loading={props.loading}
        size={30}
       />

    )
}


export default Loader;