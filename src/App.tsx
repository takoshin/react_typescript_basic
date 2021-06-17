import React from 'react'
import logo from './logo.svg'
import './App.css'
// import Basic2 from 'components/Basic2'
// import BasicUseEffect from 'components/BasicUseEffect'
import TimerCountainer from 'components/TimerCountainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        <TimerCountainer />
      </header>
    </div>
  )
}

export default App
