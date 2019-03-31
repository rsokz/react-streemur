import { combineReducers } from "redux-immutable";
import { reducer as FormReducer } from "redux-form/immutable";
import { StateType } from "typesafe-actions";
import * as AuthReducer from "../auth/reducer";
import * as StreamReducer from "../streams/reducer";
import { RecordOf } from "immutable";

interface StateValue {
  auth: AuthReducer.State;
  // form: Form;
  stream: StreamReducer.State;
}

export type RootState = RecordOf<StateValue>;

const rootReducer = combineReducers({
  auth: AuthReducer.reduce,
  form: FormReducer,
  stream: StreamReducer.reduce
});

// export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
