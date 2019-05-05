import {
  IStatisticsAction,
  UPDATE_GAME_COUNT
} from "../actions/statisticsActions";

export interface IStatisticsState {
  gameCount: number;
}

const defaultState: IStatisticsState = {
  gameCount: 0
};

function statisticsReducer(
  state = defaultState,
  action: IStatisticsAction
): IStatisticsState {
  switch (action.type) {
    case UPDATE_GAME_COUNT: {
      const { gameCount, ...others } = state;
      return { gameCount: action.payload, ...others };
    }
    default:
      return state;
  }
}

export default statisticsReducer;
