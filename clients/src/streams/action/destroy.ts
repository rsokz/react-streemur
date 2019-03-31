/**
 * @file Destroy Action
 */
import ActionType from "./ActionType";
import { Actions } from ".";
import { destroyStream } from "../../services/streams";
import { Dispatch } from "redux";
import history from "../../history";

export interface DestroyAction extends FSA {
  payload: { id: string };
  type: ActionType.DESTROY;
}

/**
 * Destroy Action Creator
 */
const destroy = (id: string) => async (dispatch: Dispatch<Actions>) => {
  try {
    await destroyStream(id);

    dispatch({ type: ActionType.DESTROY, payload: { id } });
    history.push("/");
  } catch (e) {
    console.error(e);
  }
};

export default destroy;
