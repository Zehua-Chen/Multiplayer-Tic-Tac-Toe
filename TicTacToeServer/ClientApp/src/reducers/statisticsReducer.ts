export interface IStatisticsState {
  hasGame: boolean
}

const defaultState: IStatisticsState = {
  hasGame: false
}

function statisticsReducer(state = defaultState): IStatisticsState {
  return state;
}

export default statisticsReducer;