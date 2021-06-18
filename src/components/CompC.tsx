import React, { useContext } from 'react'
import AppContext, { ActionContextType } from 'contexts/AppContext'

const CompC: () => JSX.Element = () => {
  const { dispatchProvided }: ActionContextType = useContext(AppContext)
  return (
    <div>
      <button onClick={() => dispatchProvided({ type: 'add_1' })}>Add_1</button>
    </div>
  )
}

export default CompC
