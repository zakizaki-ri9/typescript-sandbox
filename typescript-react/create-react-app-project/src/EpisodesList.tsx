import React from 'react'
import { IEpisode, IAction } from './interfaces'

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites } = props
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id}>
        <img src={episode.image.medium} alt={`name: ${episode.name}`} />
        <div>{episode.name}</div>
        <section>
          Season: {episode.season}, Number: {episode.number}
          <button onClick={(): IAction => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'UnFav'
              : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}
