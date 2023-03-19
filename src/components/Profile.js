import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { saveApiData } from '../feautures/apiData'

function Profile() {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)
  const counter = useSelector((state) => state.counter.value)
  const secondCounter = useSelector((state) => state.secondCounter.value )
  const employeesData = useSelector((state) => state.apiData.value )
  const dispatch = useDispatch()
  return (
    <div>
      <h1 style={{color : theme}} > Profile Page {counter} </h1>
      <h3>Second counter : {secondCounter} </h3>
      <p>Name : {user.name} </p> 
      <p> Age : {user.age} </p>
      <p> Email : {user.email} </p>
      {employeesData.getData.map((item,index) => <h1>{item.name}</h1> )}
      <button onClick={() => dispatch(saveApiData([...employeesData.getData,{
        name : "shiva"
      }])) } >add employee</button>
    </div>
  )
}

export default Profile