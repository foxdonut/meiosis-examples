import * as Axios from "axios";
import { Promise } from "es6-promise";
import { Ajax } from "./ajax";

export const ajax: Ajax = {
  getJSON: <T>(url: string): Promise<T> => {
    return new Promise<T>((resolve: (value: T) => void, reject: (err: any) => void) => {
      const config: Axios.AxiosXHRConfig<T> = { url: url };
      const ipromise: Axios.IPromise<Axios.AxiosXHR<T>> = Axios.request(config);
      ipromise.
        then((result: Axios.AxiosXHR<T>): void => resolve(result.data)).
        catch((error: any): void => reject(error));
    });
  }
};

/*
const ajax = {
  getJSON: function(url) {
    return ajaxPromise({
      url: url
    });
  },

  postJSON: function(url, body) {
    return ajaxPromise({
      method: "POST",
      url: url,
      data: JSON.stringify(body)
    });
  },

  deleteJSON: function(url) {
    return ajaxPromise({
      method: "DELETE",
      url: url
    });
  }
};

export default ajax;
*/