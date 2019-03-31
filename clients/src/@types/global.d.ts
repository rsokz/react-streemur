/**
 * @file Global Types
 */
type AnyObject = ObjectOf<any>;

type Optional<T> = T | undefined;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Keys<T extends object> = Array<keyof T>;

type ObjectOf<T> = {
  [key: string]: T;
};

interface FSA<P = object | Error, M = object> {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: M;
}
