/**
 * @file Streams Action Index
 */

import ActionType from "./ActionType";
export { ActionType };

import create, { CreateAction } from "./create";
export { create };

import destroy, { DestroyAction } from "./destroy";
export { destroy };

import get, { GetAction } from "./get";
export { get };

import getAll, { GetAllAction } from "./getAll";
export { getAll };

import update, { UpdateAction } from "./update";
export { update };

export type Actions =
  | CreateAction
  | DestroyAction
  | GetAction
  | GetAllAction
  | UpdateAction;
