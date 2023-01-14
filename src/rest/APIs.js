import Axios from "axios";

class APIs {
  SendRequest = ({ method, url, params, data, headers }) =>
    Axios.request({
      method,
      url,
      params,
      data,
      headers,
    });
}

export default APIs;
