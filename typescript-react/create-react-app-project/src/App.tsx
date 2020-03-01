import React from 'react'
import { Store } from './Store'
import { IEpisode, IAction } from './interfaces'

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

  console.log(state)

  return (
    <React.Fragment>
      <h1>TVMaze</h1>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img src={episode.image.medium} alt={`name: ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                Season: {episode.season}, Number: {episode.number}
                <button onClick={(): IAction => toggleFavAction(episode)}>
                  {state.favorites.find(
                    (fav: IEpisode) => fav.id === episode.id
                  )
                    ? 'UnFav'
                    : 'Fav'}
                </button>
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  )
}
