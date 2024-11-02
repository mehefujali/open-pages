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
import BookDetails from './components/BookDetails/BookDetails.jsx'
import Error from './components/Error/Error.jsx'


const router = createBrowserRouter([
  {
    errorElement: <Error></Error>,
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
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('/booksData.json'),
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
