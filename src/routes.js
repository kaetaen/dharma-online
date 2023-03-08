import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

import Home from './pages/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);
