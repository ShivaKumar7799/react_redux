import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveApiData } from '../feautures/apiData'

function FetchApi() {
  useEffect(()=> {
    apiCallData()
  },[])

  const dispatch = useDispatch()

  const apiCallData = () => {
    fetch("https://6415a1ae65dbfa5280a72ee4.mockapi.io/employeesData").then(resp => resp.json()).then(data => dispatch(saveApiData(data)))
  }
  return (
    <div>FetchApi</div>
  )
}

export default FetchApi