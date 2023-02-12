import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Compose from './components/Compose';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  }, 
  {
    path: "/home",
    element: <Home /> 
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/compose",
    element: <Compose />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
