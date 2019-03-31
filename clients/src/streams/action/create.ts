/**
 * @file Create Action
 */
import ActionType from "./ActionType";
import history from "../../history";
import { Actions } from "./";
import { createStream } from "../../services/streams";
import { Dispatch } from "redux";
import { getUserID } from "../../auth/selectors";

export interface CreateAction extends FSA {
  payload: { id: string; description: string; title: string; userID: string };
  type: ActionType.CREATE;
}

/**
 * Create Action Creator
 */
const create = (values: { description: string; title: string }) => async (
  dispatch: Dispatch<Actions>,
  getState: any
) => {
  try {
    const userID = getUserID(getState());
    const response = await createStream({ ...values, userID });

    dispatch({ type: ActionType.CREATE, payload: response });
    history.push("/");
  } catch (e) {
    console.error(e);
  }
};

export default create;
