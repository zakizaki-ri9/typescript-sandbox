import React from 'react'
import { Store } from './Store'

interface IEpisode {
  airdate: string
  id: number
  image: {
    medium: string
    original: string
  }
  name: string
  number: number
  season: number
  summary: string
  url: string
}

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  // Reactにおけるいろんな描画処理タイミングがまとまったもの
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
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
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  )
}
