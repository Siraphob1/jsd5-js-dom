import { createContext, useState } from "react";

export const DataProvider = ({children}) =>{
    const [user_name,Setuser_name] = useState('')
    const [user_age,Setuser_age] = useState(0)
    const [user_weight,Setuser_weight] = useState(0)
    const [user_runminute,Setuser_runminute] = useState(0)

    return(
         <Datacontext.Provider value={
            {
                user_name , Setuser_name,
                user_age , Setuser_age,
                user_weight, Setuser_weight,
                user_runminute , Setuser_runminute
            }
         }>

            {children}

         </Datacontext.Provider>
    )
}



const Datacontext = createContext({})

export default Datacontext

