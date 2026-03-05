import { createBrowserRouter } from "react-router";
import HomePage from "../../ui/home/pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
]);