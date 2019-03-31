/**
 * @file Get All Action
 */
import ActionType from "./ActionType";
import { Actions } from "./";
import { getAllStreams } from "../../services/streams";
import { Dispatch } from "redux";

export interface GetAllAction extends FSA {
  payload: { id: string; description: string; title: string; userID: string }[];
  type: ActionType.GET_ALL;
}

/**
 * Get All Action Creator
 */
const getAll = () => async (dispatch: Dispatch<Actions>) => {
  try {
    const response = await getAllStreams();

    dispatch({ type: ActionType.GET_ALL, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export default getAll;
