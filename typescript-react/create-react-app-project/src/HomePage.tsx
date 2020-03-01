import React from 'react'
import { IAction, IEpisode, IEpisodeProps } from './interfaces'
import { Store } from './Store'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage(): JSX.Element {
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

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
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
