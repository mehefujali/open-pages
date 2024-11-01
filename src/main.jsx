import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';


const router = createBrowserRouter([
  {
    errorElement: <h1>Opps</h1>,
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <h1>I am home</h1>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
