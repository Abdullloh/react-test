import { createBrowserRouter } from "react-router-dom";
import { ROUTE_BASE } from "../common/constants";
import { LayoutBase } from "../layouts";

export const router = createBrowserRouter([
  {
    path: ROUTE_BASE,
    element: <LayoutBase />,
  },
]);
