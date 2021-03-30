import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
    <ReactAudioPlayer src={phonetic.audio} controls />
     {props.phonetic.text}
    </div>
  );
}