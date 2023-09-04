import React, { useState } from "react";
import "./App.css";

function App() {
  const [temp , setTemp] = useState(12)
  const UpTemp =() =>{
    setTemp((element)=> element+1)
  }
  const DownTemp =() =>{
    setTemp((element)=> element-1)
  }
  return (
    <div id="app">
      <Header temp={temp} />
      <Content tempContent={temp} />
      <Footer uptemp ={UpTemp} downtemp ={DownTemp}/>
    </div>
  );
}

function Header(props) {
  const tempInHeader = props.temp;
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempInHeader}</p>
    </header>
  );
}

function Content(props) {
  const tempInContent = props.tempContent;
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature tempTemperature={tempInContent} />
    </div>
  );
}

function Temperature(props) {
  const tempInTemperature = props.tempTemperature;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{tempInTemperature} Oc</span>
    </div>
  );
}

function Footer({uptemp , downtemp}) {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={uptemp}>Up</button>
      <button onClick={downtemp}>Down</button>
    </footer>
  );
}

export default App;
