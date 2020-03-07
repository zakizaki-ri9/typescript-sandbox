import { IAction, IEpisode, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any): Promise<IAction> => {
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

export const toggleFavAction = (episode: IEpisode | any, state: IState, dispatch: any): IAction => {
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