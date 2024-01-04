import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to={`/projetos_front_end`}>Projetos Felipe Damm</Link>
        <ul>
            <li>
                <Link to={`/projetos_front_end/HTMLCSS`}>HTML e CSS</Link>
            </li>
            <li>
                <Link to={`/projetos_front_end/Javascript`}>JavaScript</Link>
            </li>
            <li>
                <Link to={`/projetos_front_end/ReactJs`}>ReactJs</Link>
            </li>
            <li>
                <Link to={`/projetos_front_end/ReactTs`}>ReactTs</Link>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar