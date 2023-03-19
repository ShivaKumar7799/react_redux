import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {secondIncrement, secondDecrement} from '../feautures/SecondCounter'

function SecondCounterComp() {
  const secondCounterValue = useSelector((state) => state.secondCounter.value )
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Second Counter value : {secondCounterValue} </h2>
      <button onClick={() => dispatch(secondIncrement(secondCounterValue + 1)) } >sec Inc</button>
      <button onClick={() => dispatch(secondDecrement())} >Sec Dec</button>
    </div>
  )
}

export default SecondCounterComp