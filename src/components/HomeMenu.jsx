import React from 'react'
import "./HomeMenu.css"
import { Link } from 'react-router-dom'

const HomeMenu = () => {
  return (
    <div>
        <div id="main-container">
            <div className="menu">
                <h1>Projetos Front End</h1>
                <ul>
                    <li>
                        <Link to={`/HTMLCSS`}>HTML e CSS</Link>
                    </li>
                    <li>
                        <Link to={`/Javascript`}>Javascript</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeMenu