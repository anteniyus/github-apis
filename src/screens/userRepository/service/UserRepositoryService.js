import APIs from "../../../rest/APIs";
import { getUserRepositoriesURL } from "../../../rest/URLs";
import METHODS from "../../../constants/Methods";

const api = new APIs();
export const GetUserRepositories = ({ username }) =>
  api
    .SendRequest({
      method: METHODS.get,
      url: getUserRepositoriesURL({ username }),
    })
    .then((response) => response.data);
