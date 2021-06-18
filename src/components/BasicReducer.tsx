import React, { useReducer } from 'react'

export interface ActionType {
  type: 'add_1' | 'multiple_3' | 'reset'
}

const initialState: number = 0
const reducer = (currentState: number, action: ActionType) => {
  switch (action.type) {
    case 'add_1':
      return currentState + 1
    case 'multiple_3':
      return currentState * 3
    case 'reset':
      return initialState
    default:
      return currentState
  }
}
const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatch({ type: 'add_1' })}>Add + 1</button>
      <button onClick={() => dispatch({ type: 'multiple_3' })}>
        Multiple * 3
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default BasicReducer
