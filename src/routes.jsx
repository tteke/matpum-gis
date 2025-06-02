import { createBrowserRouter } from "react-router-dom";
import Map from "./components/Map";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Map,
  },
]);


export default router;
