import React from 'react'

interface IState {
  episodes: []
  favoraites: []
}

const initialState: IState = {
  episodes: [],
  favoraites: []
}

export const Store = React.createContext(initialState)

// const reducer = () => {
//   // pass
// }

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
