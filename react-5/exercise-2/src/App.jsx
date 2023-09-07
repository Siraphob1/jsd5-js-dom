import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [is_update , setIs_update] = useState(false);

  // started life cycle here
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://jsd5-mock-backend.onrender.com/members`);
      // set member here
      setMembers(response.data)
    };

    
    getData();
  }, [is_update]);

  // update here
  const updateData = async (id, name, age, weight, status)=>{
    const objData = {
      id , name , age , weight , status
    }
   const response = await axios.post(`https://jsd5-mock-backend.onrender.com/members` , objData);
   if(response.status === 200){
    setIs_update(!is_update) 
   } 
  }

  //delete 
    const deleteData = async (id) =>{
      const url = `https://jsd5-mock-backend.onrender.com/member/${id}`
      const response = await axios.delete(url)

      if(response.status !== 200) return console.log(`error: ${response.status}`)
      setIs_update(!is_update)
    }
  // create here

  return (
    <div className="container">
      <Form submitHandler={updateData} />
      <div className="card-container">
        {members.map((member) => (
          <Card 
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
            deleteHandler={deleteData}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
