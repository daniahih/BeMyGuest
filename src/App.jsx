import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AllEvent from './pages/AllEvent/AllEvent'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Layout from './Components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use the Layout component here
    children: [
      { path: '/', element: <Home /> },
      { path: 'all-events', element: <AllEvent /> },
      { path: 'about', element: <About /> },

      // {
      //   path: 'log-in',
      //   element: <LoginForm />,
      // },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
