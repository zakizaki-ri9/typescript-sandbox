import React from 'react'
import { Store } from './Store'
import { IEpisode, IAction } from './interfaces'

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  // Reactにおけるいろんな描画処理タイミングがまとまったもの
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async (): Promise<IAction> => {
    const data = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    )
    const json = await data.json()

    // Actionsの実行
    return dispatch({
      type: 'FETCH_DATA',
      payload: json._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    if (episodeInFav) {
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: state.favorites.filter(
          (fav: IEpisode) => fav.id !== episode.id
        )
      }
    }
    return dispatch(dispatchObj)
  }

  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites
  }

  console.log(state)

  return (
    <React.Fragment>
      <header>
        <h1>TVMaze</h1>
        <h2>Favorite episodes: {state.favorites.length}</h2>
      </header>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section>
          <EpisodeList {...props}></EpisodeList>
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
