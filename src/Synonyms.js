import React from "react";

export default function Synonyms(props) {
  if(props.synonyms) {
   
     return (
       <ul className="Synonyms">
         <strong>
          < span className="Similar">
         Synonyms:
         </span> 
         </strong>
        {props.synonyms.map(function (synonym, index) {
          return  <li key={index}>{synonym}</li>;
        })}
           </ul>
     ); 
   } else {
     return null;
   }
}