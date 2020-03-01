import React from 'react'

interface IState {
  episodes: []
  favoraites: []
}

interface IAction {
  type: string
  payload: any
}

const initialState: IState = {
  episodes: [],
  favoraites: []
}

export const Store = React.createContext<IState | any>(initialState)

// ReducersとStoreの実装
const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  // ReducersとStoreの設定（Actionsの実装）
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
