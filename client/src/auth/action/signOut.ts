/**
 * @file SignOut Action
 */
import ActionType from "./ActionType";

export interface SignOutAction extends FSA {
  type: ActionType.SIGN_OUT;
}

/**
 * SignOut Action Creator
 */
const signOut = (): SignOutAction => ({
  type: ActionType.SIGN_OUT
});

export default signOut;
