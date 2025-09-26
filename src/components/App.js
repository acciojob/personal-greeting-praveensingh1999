
import React from "react";
import './../styles/App.css';
import {useState} from "react"

const App = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) =>{
    setValue(event.target.value);
  }
  return (
    <div>
       <label>Enter your name:</label>
        <input type="text" value={value} onChange = {handleChange}></input>
    <p>Hello {value}!</p>
    </div>
  
  )
}

export default App
