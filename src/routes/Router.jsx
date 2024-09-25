import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

export default Router;
