import { createContext,useState } from "react";


export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const[state,setstate]=useState({
      foodtype:'',show:false,Qty:0
  })
   
    
  const getQut=(Qty,food)=>{
    setstate({...state,foodtype:food,show:true,Qty})
  }
  
    return(
        <AuthContext.Provider value={{State:state,getQut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
