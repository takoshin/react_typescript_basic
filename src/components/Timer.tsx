import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [count, setCount] = useState<number>(0)

  const time = (): void => {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(time, 1000)
    return () => {
      clearInterval(interval)
      console.log('cleared')
    }
  }, [])

  return <div>{count}</div>
}

export default Timer
