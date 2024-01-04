import React from 'react'
import "./HomeMenu.css"
import { Link } from 'react-router-dom'

const HomeMenu = () => {
  return (
    <div>
        <div id="main-container">
            <div className="menu">
                <h1>Projetos Felipe Damm</h1>
                <ul>
                    <li>
                        <Link to={`/projetos_front_end/HTMLCSS`}>HTML e CSS</Link>
                    </li>
                    <li>
                        <Link to={`/projetos_front_end/Javascript`}>Javascript</Link>
                    </li>
                    <li>
                        <Link to={`/projetos_front_end/ReactJs`}>React + JavaScript</Link>
                    </li>
                    <li>
                        <Link to={`/projetos_front_end/ReactTs`}>React + TypeScript</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeMenu