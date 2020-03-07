import React from 'react'
import { IEpisodeProps } from './interfaces'
import { Store } from './Store'
import { fetchDataAction, toggleFavAction } from './Actions'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  // Reactにおけるいろんな描画処理タイミングがまとまったもの
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section>
          <EpisodesList {...props}></EpisodesList>
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
