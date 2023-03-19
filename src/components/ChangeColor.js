import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeColor} from '../feautures/theme'

function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("")
  return (
    <div>
      <input type="text" value={color} onChange={(event) => setColor(event.target.value) } />
      <button onClick={() => dispatch(changeColor(color))} > Change Color </button>
    </div>
  )
}

export default ChangeColor