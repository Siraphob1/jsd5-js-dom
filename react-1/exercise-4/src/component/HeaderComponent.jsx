import { useState } from "react"

const HeaderComponent = () => {

    let [user_name,Setuser_name] = useState('')
    let [user_age,Setuser_age] = useState(0)
    let [user_weight,Setuser_weight] = useState(0)
    let [user_runminute,Setuser_runminute] = useState(0)


    

    const UpdateName = (event) =>{
        Setuser_name(event.target.value)
    }
    const UpdateAge = (event) =>{
        Setuser_age(event.target.value)
    }
    const UpdateWeight = (event) =>{
        Setuser_weight(event.target.value)
    }
    const UpdateRunminute = (event) =>{
        Setuser_runminute(event.target.value)
    }

   

  return (
    <header>
        <h1>Enter Data</h1>
        <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={UpdateName} value={user_name}/><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" onChange={UpdateAge} value={user_age}/><br /><br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" onChange={UpdateWeight} value={user_weight}/><br /><br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" onChange={UpdateRunminute} value={user_runminute}/><br /><br />

        <button type="button" >Add Data</button>
        </form>
    </header>
  )
}

export default HeaderComponent