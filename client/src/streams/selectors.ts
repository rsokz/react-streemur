/**
 * @file Stream Selectors
 */
import { RootState } from "../store/rootReducer";

export const selectAllStreams = (state: RootState) => state.getIn(["stream"]);

export const selectByID = (state: RootState, id: string) =>
  state.getIn(["stream", id]);
