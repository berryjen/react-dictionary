import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  
  function handleResponse(response) {
    setResults(response.data[0]);
  }
   
  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev//
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  }

  
  function handleKeywordChange(event) {
   setKeyword(event.target.value);
  }

   return (
  <div className="dictionary">
    <form onSubmit={search}>
       <input type="search" onChange={handleKeywordChange}
       autoFocus={true} />
    </form>
    <Results results={results} />
    </div>
  );
}