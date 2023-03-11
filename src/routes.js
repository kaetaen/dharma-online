import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

import Home from './pages/Home'
import Suggests from "./pages/Suggests";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sugestoes",
    element: <Suggests />

  }
]);
