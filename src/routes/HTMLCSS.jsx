import React from 'react'
import HTMLCSSMenu from '../components/HTMLCSSMenu'
import { Link } from 'react-router-dom'
import "./HTMLCSS.css"

const HTMLCSS = () => {
  return (
    <div className='HTMLCSS'>
      <HTMLCSSMenu />
      <Link to={`/projetos_front_end`} className='back-btn'>Voltar</Link>
    </div>
  )
}

export default HTMLCSS