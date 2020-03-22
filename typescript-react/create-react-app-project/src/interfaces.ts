export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
}

export interface IAction {
  type: string
  payload: any
}

export interface IEpisode {
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

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: {state: IState, dispatch: Dispatch}
  toggleFavAction: (episode: IEpisode, state: IState, dispatch: Dispatch) => IAction
  favorites: Array<IEpisode>
}
