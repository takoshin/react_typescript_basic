import React, { useState } from 'react'
import Timer from './Timer'

export const TimerCountainer = () => {
  const [display, setDisplay] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {display && <Timer />}
    </div>
  )
}
export default TimerCountainer
