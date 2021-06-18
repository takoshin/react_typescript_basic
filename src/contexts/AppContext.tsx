import React, { createContext } from 'react'
import { ActionType } from 'components/BasicReducer'

export interface ActionContextType {
  countProvided: number
  dispatchProvided: React.Dispatch<ActionType>
}

const AppContext = React.createContext<ActionContextType>(undefined!)

export default AppContext
