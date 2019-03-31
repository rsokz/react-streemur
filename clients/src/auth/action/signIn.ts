/**
 * @file SignIn Action
 */
import ActionType from "./ActionType";

export interface SignInAction extends FSA {
  payload: { userID: string };
  type: ActionType.SIGN_IN;
}

/**
 * SignIn Action Creator
 */
const signIn = (userID: string): SignInAction => ({
  payload: { userID },
  type: ActionType.SIGN_IN
});

export default signIn;
