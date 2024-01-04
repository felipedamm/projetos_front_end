import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from './routes/Home.jsx'
import HTMLCSS from './routes/HTMLCSS.JSX'
import Javascript from './routes/Javascript.jsx'
import ReactJsProjects from './routes/ReactJsProjects.jsx'
import ReactTsProjects from './routes/ReactTsProjects.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/projetos_front_end",
        element: <Home />
      },
      {
        path: "/projetos_front_end/HTMLCSS",
        element: <HTMLCSS />
      },
      {
        path: "/projetos_front_end/Javascript",
        element: <Javascript />
      },
      {
        path: "/projetos_front_end/ReactJs",
        element: <ReactJsProjects />
      },
      {
        path: "/projetos_front_end/ReactTs",
        element: <ReactTsProjects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
