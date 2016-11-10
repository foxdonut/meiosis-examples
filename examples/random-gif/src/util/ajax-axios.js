import axios from "axios";

const ajax = {
  getJSON: options => axios(options).then(response => response.data)
};

export default ajax;
