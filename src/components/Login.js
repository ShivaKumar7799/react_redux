import React from 'react'
import { useDispatch } from "react-redux"
import {login,logout} from '../feautures/user'

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(login({
        name : "shiva", 
        age : 20,
        email : "shivakumarbammidi@gmail.com"
      }))} >Login</button>
      <button onClick={() => dispatch(logout())} >Logout</button>
    </div>
  )
}

export default Login