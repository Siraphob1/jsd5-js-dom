import React, { useState } from 'react'

const App = () => {
    const [inputname , setInputname] = useState('');
    const [inputshortbio , setInputshortbio] = useState('');

    const ChangeName = (event) =>{
        setInputname(event.target.value)
    }

    const ChangeShortbio = (event) =>{
        setInputshortbio(event.target.value)
    }

  return (
    <main>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <form >
            <input type="text" placeholder='name here' onChange={ChangeName} value={inputname}/>
            <input type="text" placeholder='short bio'onChange={ChangeShortbio} value={inputshortbio}/>            
        </form>
        <h1>{inputname === '' ? 'Your name here'  :inputname}</h1>
        <div>{inputshortbio === '' ? 'short bio'  :inputshortbio}</div>
        <a href="#">Fcebook</a>
        <a href="#">Twitter</a>
    </main>
  )
}

export default App