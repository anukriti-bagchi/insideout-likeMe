import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    setLikeCounter(likeCounter + 1);
  }

  return (
    <div className="App">
      <h1> inside out!!</h1>
      <button onClick={likeClickHandler}> Like Me!</button> {likeCounter}
    </div>
  );
}

/**
 * 
 if we do the above thing using prompt it could be like this:
 var username = prompt("Give me your name");
 */

/**
 * things to notice,
 * in react in place of class we use className
 * style takes an object instead of a string in jsx
 * tags and attributes works similarly as in html
 */
