/**
 * @file Stream Reducer
 */
import { Map } from "immutable";
import { Actions, ActionType } from "./action";

export type State = Map<
  string,
  { id: string; description: string; title: string; userID: string }
>;
export const defaultState: State = Map();

export const reduce = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CREATE:
    case ActionType.GET:
    case ActionType.UPDATE: {
      return state.set(action.payload.id, action.payload);
    }
    case ActionType.GET_ALL:
      return action.payload.reduce(
        (byID, stream) => byID.set(stream.id, stream),
        defaultState
      );
    case ActionType.DESTROY:
      return state.remove(action.payload.id);
  }
  return state;
};
