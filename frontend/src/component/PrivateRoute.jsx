import React from 'react'
import {useContext} from 'react'
import { AuthContext } from "../Context/Context";
import { Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const PrivateRoute = ({children}) => {
  const {State,getQut}=useContext(AuthContext)
const auth=localStorage.getItem("auth")
  if(!auth){
    toast.error('Please Login')
    return <Navigate to='/login'/>
  }
  return children;
}

export default PrivateRoute
