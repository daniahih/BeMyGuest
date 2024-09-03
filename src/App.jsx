import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AllEvent from "./pages/AllEvent/AllEvent";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout";
//redux
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component here
    children: [
      { path: "/", element: <Home /> },
      { path: "all-events", element: <AllEvent /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return (
  <Provider store={store}>
  <RouterProvider router={router}>

  </RouterProvider>
  </Provider>
    )
}

export default App;
