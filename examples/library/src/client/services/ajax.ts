import { Promise } from "es6-promise";

export interface Ajax {
  getJSON: <T>(url: string) => Promise<T>;
}
