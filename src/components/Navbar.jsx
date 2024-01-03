import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to={`/`}>Projetos Front End</Link>
        <ul>
            <li>
                <Link to={`/HTMLCSS`}>HTML e CSS</Link>
            </li>
            <li>
                <Link to={`/Javascript`}>Javascript</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar