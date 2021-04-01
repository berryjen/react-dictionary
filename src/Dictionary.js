import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("props.defaultKeyword");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);
  
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev//
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
  }
   
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
   setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
   return (
  <div className="Dictionary">
    <section>
    <form onSubmit={handleSubmit}>
       <input type="search"  placeholder= "type in a word" onChange={handleKeywordChange}
       autoFocus={true} />
    </form>
   <div className="hint">
     suggested words: sunrise, waterfall, wine, travel, alliteration...
   </div>
    </section>
    <Results results={results} />
    </div>
  ); 
} else {
  load();
  return "Loading";
}
  }
   