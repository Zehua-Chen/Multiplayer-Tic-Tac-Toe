export const UPDATE_GAME_COUNT = "UPDATE_GAME_COUNT";

export interface IStatisticsAction {
  type: string;
  payload: number;
}

export function addGameCount(count: number): IStatisticsAction {
  return {
    type: UPDATE_GAME_COUNT,
    payload: count
  };
}
