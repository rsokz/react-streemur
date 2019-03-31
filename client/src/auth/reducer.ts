/**
 * @file Auth Reducer
 */
import { Record, RecordOf } from "immutable";
import { Actions, ActionType } from "./action";

export type State = RecordOf<{
  isSignedIn: boolean;
  userID: string;
}>;

export const defaultState: State = Record({
  isSignedIn: false,
  userID: ""
})();

export const reduce = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      const { userID } = action.payload;
      return state.set("isSignedIn", true).set("userID", userID);
    case ActionType.SIGN_OUT:
      return defaultState;
  }
  return state;
};
