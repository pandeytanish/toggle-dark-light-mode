import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const Posts = () => {
  const {theme,handleOnClick} = useContext(ThemeContext);
  return (
    <div>
        <h2>My theme is {theme} </h2>
        <button 
        className={ `btn ${theme === "dark" ? "btn-light" : "btn-dark"} border `} 
        onClick={handleOnClick}>
          {theme === "dark" ? "light" : "dark"} 
          </button>
        

    </div>
  );
};

export default Posts;