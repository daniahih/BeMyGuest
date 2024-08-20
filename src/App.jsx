import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import AllEvent from "./pages/AllEvent/AllEvent";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <Home />,
  },
  { path: "/all-events", element: <AllEvent /> },
  { path: "/about", element: <About /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
