import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import AppLayout from './layouts/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './layouts/CountryDetails'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
          path : "/",
          element : <Home />,
        },
        {
          path : "/contact",
          element : <Contact />,
        },
        {
          path : "/country",
          element : <Country />,
        },
        {
          path : "/country/:id",
          element : <CountryDetails />,
        },
        {
          path : "/about",
          element : <About />,
        },
      ]
    }
  ])

  return <RouterProvider router={router} ></RouterProvider>
}

export default App