import React, { useEffect, useState } from "react";

const App = () => {
  const [username , setUsername] = useState('')
  const [userage , setUserage] = useState(0)
  const [userposition , setUserposition] = useState('position')


  useEffect(()=>{
   setUsername('James')
   setUserage(99)
   setUserposition('Instructor')
  },[])



  return (
    <div>
      <h1>Your information is</h1>
      <h3>{username}</h3>
      <h3>{userage}</h3>
      <h3>{userposition}</h3>   
    </div>
  );
};

export default App;
