import React from "react";

import "./SideMenu.css";
import Card from "./Card";


function SideMenu(props){
   const dataList = props.movie;
   const EmptySearch = props.emptyFlag;

   function passingTitle(movieObj){
       props.mailFunc(movieObj)
   }
  if(EmptySearch){

    return(
        <div className="menu-div">
            <h3>{props.listTitle}</h3>
            <h3 className="empty-alert">No Movie's Found</h3>  
        </div>
       )

  }else{

    return(
        <div className="menu-div">
            <h3>{props.listTitle}</h3>
            {dataList.map(item => <Card key={item.title} src={item.img} title={item.title} about={item.about} trailer={item.trailer} choseFunc={passingTitle} />)}  
        </div>
       )

  }


}

export default SideMenu;

