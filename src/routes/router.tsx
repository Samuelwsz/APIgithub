import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Repo from "../pages/repo"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/repo/*",
    element: <Repo />,
  },
])
