import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllEvent from "./pages/AllEvent/AllEvent";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import Register from "./Components/LoginForm/Register";
import LoginForm from "./Components/LoginForm/LoginForm";
import Profile from "./pages/ProfilePage/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component here
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/all-events", element: <AllEvent /> },
      { path: "/about", element: <About /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/loginPage", element: <LoginForm /> },
      <ToastContainer key="toast-container" />,
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
