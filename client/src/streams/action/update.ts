/**
 * @file Update Action
 */
import ActionType from "./ActionType";
import history from "../../history";
import { Actions } from "./";
import { updateStream } from "../../services/streams";
import { Dispatch } from "redux";

export interface UpdateAction extends FSA {
  payload: { id: string; description: string; title: string; userID: string };
  type: ActionType.UPDATE;
}

/**
 * Update Action Creator
 */
const update = (
  id: string,
  values: { description: string; title: string }
) => async (dispatch: Dispatch<Actions>) => {
  try {
    const response = await updateStream(id, values);

    dispatch({ type: ActionType.UPDATE, payload: response });
    history.push("/");
  } catch (e) {
    console.error(e);
  }
};

export default update;
