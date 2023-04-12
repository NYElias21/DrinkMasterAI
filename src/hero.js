import React from 'react';
import logo from './logowhiskey.png';

/*
function Hero() {
  return (
    <div className="Hero"> 
        <h1>Create a new drink</h1>
        <form className="SearchBar">
            <input type="text" placeholder="Search..."/>
        </form>
    </div>
  );
}

export default Hero;

*/

function Hero() {
    return (
      <div className="Hero">
        <div className="Hero-left">
          <h1>BECOME A MIXOLOGY MASTER </h1>
          <form className="SearchBar">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
        <div className="Hero-right">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
  
  export default Hero;