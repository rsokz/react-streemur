/**
 * @file All Actions
 */
import { Actions as AuthAction } from "../auth/action";
import { Actions as StreamAction } from "../streams/action";

export type RootAction = AuthAction | StreamAction;
