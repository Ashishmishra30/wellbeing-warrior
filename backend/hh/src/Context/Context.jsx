import { createContext,useState } from "react";


export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const[state,setstate]=useState({
      auth:false,
      foodtype:'',show:false,Qty:0
  })
   
  const login=()=>{
    setstate({...state,auth:true})
  }
    
  const getQut=(Qty,food)=>{
    setstate({...state,foodtype:food,show:true,Qty})
  }
  
    return(
        <AuthContext.Provider value={{State:state,getQut,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
