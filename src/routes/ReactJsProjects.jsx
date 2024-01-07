import React from 'react'
import ReactJsMenu from '../components/ReactJsMenu'
import { Link } from 'react-router-dom'
import "./ReactJsProjects.css"

const ReactJsProjects = () => {
  return (
    <div className='reactjs'>
        <ReactJsMenu />
        <Link to={`/projetos_front_end`} className='back-btn'>Voltar</Link>
    </div>
  )
}

export default ReactJsProjects