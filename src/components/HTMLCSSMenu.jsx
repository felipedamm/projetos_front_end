import React from 'react'
import "./HTMLCSSMenu.css"
import { Link } from 'react-router-dom'

const HTMLCSSMenu = () => {
  return (
    <div>
        <div id="main-container">
            <div className="html-menu">
                <h1>Projetos HTML/CSS</h1>
                <a href="Projetos HTML e CSS/Blog/index.html">Blog</a>
                <a href="Projetos HTML e CSS/cópia Instagram inicial/index.html">Cópia Pagina inicial Instagram</a>
                <a href="Projetos HTML e CSS/Formulário Básico/index.html">Formulário básico</a>
                <a href="Projetos HTML e CSS/Tela inicial empresa/index.html">Tela inicial empresa</a>
                <a href="Projetos HTML e CSS/Tela inicial Google/index.html">Cópia Google</a>
                <a href="Projetos HTML e CSS/Tela inicial netflix/index.html">Cópia users Netflix</a>
            </div>
        </div>
    </div>
  )
}

export default HTMLCSSMenu