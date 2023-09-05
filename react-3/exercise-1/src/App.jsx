import React, { useEffect, useState } from 'react';

function App() {
    // adding state here.
  let [clickfullname , setClickfullname] = useState(false)
  let [clickage , setClickge] = useState(false)
  let [clickpicture , setClickpicture] = useState(false)

 

  const handleClick = (value) => {
    // code here.
  };

  const OnClickFullname =() => {
    const current = !clickfullname
    setClickfullname(current)
  }

  const OnClickage = () =>{
    const current = !clickage
    setClickge(current)
  } 

  const OnclickPicture =()=>{
    const current = !clickpicture
    setClickpicture(current)
  }


  return (
    <div>
      <button onClick={OnClickFullname}>Fullname</button>
      <button onClick={OnClickage}>Age</button>
      <button onClick={OnclickPicture}>Picture</button>
      <DisplayInfo clickfullname = {clickfullname}  clickage = {clickage} clickpicture={clickpicture}/>
    </div>
  );
}

function DisplayInfo(props) {
  const {clickfullname ,clickage , clickpicture } = props
  let ___;
  if (props.clickfullname === 'Fullname') {
    ___ = <h2>John Doe</h2>;
  } else if (___ === 'Age') {
    ___ = <h2>30</h2>;
  } else if (___ === 'Picture') {
    ___ = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    ___ = <p>Please select an option.</p>;
  }

  return (
    <div>
      {!clickfullname && !clickage && !clickpicture &&
        <p>Please select an option.</p>
      }
      {clickfullname && <h2>John Doe</h2>}
      {clickage && <h2>30</h2>}
      {clickpicture && <img src="https://via.placeholder.com/150" alt="Placeholder" />}
    </div>
  );
}

export default App;
