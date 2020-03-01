import React from 'react'
import { Link } from '@reach/router'
import { Store } from './Store'

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store)
  return (
    <React.Fragment>
      <header>
        <h1>TVMaze</h1>
        <Link to="/">Home</Link>
        <Link to="/faves">Favorite episodes: {state.favorites.length}</Link>
      </header>
      {props.children}
    </React.Fragment>
  )
}
