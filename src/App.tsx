import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import CompB from 'components/CompB'
import AppContext from 'contexts/AppContext'
import Memo from 'components/Memo'

type ActionType = {
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

function App(): JSX.Element {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Count {count} */}
          {/* <CompB /> */}
          <Memo />
        </header>
      </div>
    </AppContext.Provider>
  )
}

export default App
