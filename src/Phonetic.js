import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
    <ReactAudioPlayer src={props.phonetic.audio} controls />
     <h5 id ="pronounce">
     {props.phonetic.text}</h5> 
    </div>
  );
}