import { createBrowserRouter } from "react-router-dom";
import UserRepositoryList from "./screens/userRepository/list";

const router = createBrowserRouter([
  {
    path: "/list",
    element: <UserRepositoryList />,
  },
  {
    path: "*",
    element: <h1>Not Found! 404</h1>,
  },
]);

export default router;
