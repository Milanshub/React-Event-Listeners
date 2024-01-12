import { useState } from "react";


function App() {
    // Chooase the value "headingText", and then we change that value to "setHeadingText"
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false)

    function handleClick (){
        setHeadingText("Submitted")
    }

    function handleMouseOver(){
        setMouseOver(true)
    }

    function handleMouseOut(){
        setMouseOver(false)
    }

    return (
      <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button 
        style={{backgroundColor : isMouseOver ? "black" : "white"}}
        onClick={handleClick} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
         >
        Submit
        </button>
      </div>
    );
  }
  
  export default App;
  