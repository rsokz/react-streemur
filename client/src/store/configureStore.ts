/**
 * @file Configure redux store
 */
import { applyMiddleware, compose, createStore, Store } from "redux";
import { RootAction } from "./rootAction";
import rootReducer, { RootState } from "./rootReducer";
import thunk from "redux-thunk";

export type Store = Store<RootState, RootAction>;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// prettier-ignore
const configureStore = (): Store => createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export default configureStore;
