import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Header/Navbar';
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Pricing from './Component/Pricing/Pricing';
import Blogs from './Component/Blogs/Blogs';
import Logos from './Component/Mix/Logos';

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element : <> <Navbar /> <Home /> <Logos /> </>
      },
      {
        path: '/about',
        element : <> <Navbar /> <About /> </>
      },
      {
        path: '/services',
        element : <> <Navbar /> <Services /> </>
      },
      {
        path: '/pricing',
        element : <> <Navbar /> <Pricing /> </>
      },
      {
        path: '/blogs',
        element : <> <Navbar /> <Blogs /> </>
      }
    ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
