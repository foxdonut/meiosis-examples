import axios from "axios";

export const ajax = {
  getJSON: options => axios(options).then(response => response.data)
};
