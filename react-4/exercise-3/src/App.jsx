import React, { useState } from 'react'

const App = () => {
    const [fullname , setFullname] = useState('')
    const [age , setAge] = useState(0)
    const [picture , setPicture] = useState('')

    const [display , setDisplay] = useState('')

   

    
  return (
    <div>
        <form >
            <input type="text" onChange={()=> setFullname(event.target.value)} value={fullname}/>
            <input type="text" onChange={()=> setAge(event.target.value)} value={age}/>
            <input type="text" onChange={()=> setPicture(event.target.value)} value={picture}/>
            <button type="button" onClick={()=> setDisplay('fullname')}>Fullname</button>
            <button type="button" onClick={()=> setDisplay('age')}>Age</button>
            <button type="button" onClick={()=> setDisplay('picture')}>Picture</button>
        </form>
        <br />
        {display === 'fullname' ?<div>{fullname}</div> 
                                : display === 'age' ? <div>{age}</div>
                                                    : display === 'picture' ? <img src={picture} alt="" /> 
                                                                            :null}
    </div>
  )
}

export default App