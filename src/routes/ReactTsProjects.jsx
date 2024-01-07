import React from 'react'
import ReactTsMenu from '../components/ReactTsMenu'
import { Link } from 'react-router-dom'
import "./ReactTsProjects.css"

const ReactJsProjects = () => {
  return (
    <div className='reactts'>
        <ReactTsMenu />
        <Link to={`/projetos_front_end`} className='back-btn'>Voltar</Link>
    </div>
  )
}

export default ReactJsProjects