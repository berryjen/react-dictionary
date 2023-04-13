import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  
  return ( 
    <div className="Meaning">
    <strong>{props.meaning.partOfSpeech}</strong>
    {props.meaning.definitions.map(function(definition, index) {
      return (
        <div key={index}>
          <div className= "Definition">
              <h4>
              {definition.definition}
              </h4>
          </div>

            <em>
              <span className="Example">
              </span>
            </em>
            <em>

                <span className="Example">
             "{definition.example}"
             </span>
            </em>
            
            <em>
              {definition.exmaple}
            </em>
        </div>
      ); 
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      </div>
  );
    }