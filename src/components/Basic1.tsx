import React, { useState } from 'react'

interface AppName {
  name?: string
}

const Basic1: React.FunctionComponent<AppName> = ({ name }) => {
  const clickHandler = (): void => {
    console.log('clicked')
  }
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+ {count}</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Hello, {name}!</h1>
      <h2>Hello, TypeScript!</h2>
    </>
  )
}

Basic1.defaultProps = {
  name: 'Hello, defaultProps!',
}

export default Basic1
