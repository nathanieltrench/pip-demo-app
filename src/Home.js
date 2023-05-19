import React from "react";
import amalfi from "./resources/amalfi.jpeg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to this feature-rich test application</h1>
      <h2>We're glad you're here</h2>
      <img src={amalfi} alt="boats in front of colorful buildings"></img>
    </div>
  );
};

export default Home;


