const host = "https://api.github.com";
const users = "users";
const repos = "repos";

export const getUserRepositoriesURL = ({ username }) =>
  `${host}/${users}/${username}/${repos}`;
