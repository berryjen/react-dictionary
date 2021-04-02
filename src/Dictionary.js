import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
  console.log(response);
  }
  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev//
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
     
    let pexelsApiKey= "563492ad6f91700001000001c71b3613d49e4fd19d96dc112daa1a5d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
   
  function handleKeywordChange(event) {
   setKeyword(event.target.value);
  }

 return (
  <div className="Dictionary">
    <section>
    <h1>
      What word do you want to look up?
    </h1>
    <form onSubmit={search}>
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
  }
   