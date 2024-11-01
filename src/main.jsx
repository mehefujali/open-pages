import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigate } from 'react-router-dom'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter([
  {

    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />
      },
      {
        path: '/home',
        loader: () => fetch('booksData.json'),
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <h1>Listed Books</h1>
      },
      {
        path: '/pages-to-read',
        element: <h1>pages to read</h1>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
