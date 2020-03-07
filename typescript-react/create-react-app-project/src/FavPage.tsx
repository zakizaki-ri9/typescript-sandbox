import React from 'react'
import { Store } from './Store'
import { toggleFavAction } from './Actions'
import { IEpisodeProps } from './interfaces'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section>
        <div>
          <EpisodesList {...props} />
        </div>
      </section>
    </React.Suspense>
  )
}
