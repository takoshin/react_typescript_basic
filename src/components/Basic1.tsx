import React from 'react'

interface AppName {
  name?: string
}

const Basic1: React.FunctionComponent<AppName> = ({ name }) => {
  const clickHandler = (): void => {
    console.log('clicked')
  }

  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <h1>Hello, {name}!</h1>
      <h2>Hello, TypeScript!</h2>
    </>
  )
}

Basic1.defaultProps = {
  name: 'Hello, defaultProps!',
}

export default Basic1
