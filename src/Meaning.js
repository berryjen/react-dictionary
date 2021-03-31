import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  
  return ( 
    <div className="Meaning">
    <strong>{props.meaning.partOfSpeech}</strong>
    {props.meaning.definitions.map(function(definition, index) {
      return (
        <div key={index}>
          <p>
            <em>
              <h4>
              {definition.definition}
              </h4>
            </em>
            
            <br />
            <em>
              <span className="Example">
              Example:
              </span>
            </em>
            <em>
                <span className="Example">
             {definition.example}
             </span>
            </em>
            <br />
            <em>
              {definition.exmaple}
            </em>
            <Synonyms synonyms={definition.synonyms} />
          </p>
        </div>
      ); 
      })}
      </div>
  );
    }