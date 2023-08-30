import React from "react";
import "./App.css";

let data_member =[
  {id:1 , sentence: 'John Doe (john@example.com)'},
  {id:2 , sentence: 'Jane Smith (jane@example.com)'}
]

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    // Code here
    <div className="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const DisplayMember = () => {
  return (
    // Code here
    <div className="members">
      <h2>Registered Members</h2>

      {data_member.map( (element) =>{
        return  <div className="member" key={element.id} >
                  {element.sentence}
                </div>
      })}

    </div>
  );
};

export default App;
