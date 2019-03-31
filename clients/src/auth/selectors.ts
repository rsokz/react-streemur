/**
 * @file Auth Selectors
 */
import { RootState } from "../store/rootReducer";

export const getIsSignedIn = (state: RootState): boolean =>
  state.getIn(["auth", "isSignedIn"]);

export const getUserID = (state: RootState): string =>
  state.getIn(["auth", "userID"]);
