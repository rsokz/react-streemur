/**
 * @file Get Action
 */
import ActionType from "./ActionType";
import { Actions } from "./";
import { getStream } from "../../services/streams";
import { Dispatch } from "redux";

export interface GetAction extends FSA {
  payload: {
    id: string;
    description: string;
    title: string;
    userID: string;
  };
  type: ActionType.GET;
}

/**
 * Get Action Creator
 */
const get = (id: string) => async (dispatch: Dispatch<Actions>) => {
  try {
    const response = await getStream(id);

    dispatch({ type: ActionType.GET, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export default get;
