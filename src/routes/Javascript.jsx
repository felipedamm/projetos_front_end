import React from 'react'
import JavascriptMenu from '../components/JavascriptMenu'
import { Link } from 'react-router-dom'
import "./Javascript.css"

const Javascript = () => {
  return (
    <div className="javascript">
      <JavascriptMenu />
      <Link to={`/projetos_front_end`} className='back-btn'>Voltar</Link>
    </div>
  )
}

export default Javascript