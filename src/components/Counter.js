import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../feautures/Counter'
import SecondCounterComp from './SecondCounterComp'

function Counter() {
  const counter = useSelector((state => state.counter.value))
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment(counter + 1)) } > Increment</button>
       {counter}
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <hr />
      <SecondCounterComp />
    </div>
  )
}

export default Counter