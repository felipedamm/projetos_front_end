import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from './routes/Home.jsx'
import HTMLCSS from './routes/HTMLCSS.JSX'
import Javascript from './routes/Javascript.jsx'
import ReactPropjects from './routes/ReactProjects.jsx'
import ReactProjects from './routes/ReactProjects.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/projetos_js",
        element: <Home />
      },
      {
        path: "/HTMLCSS",
        element: <HTMLCSS />
      },
      {
        path: "/Javascript",
        element: <Javascript />
      },
      {
        path: "/React",
        element: <ReactProjects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
