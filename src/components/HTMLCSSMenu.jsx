import React from 'react'
import "./HTMLCSSMenu.css"
import { Link } from 'react-router-dom'

const HTMLCSSMenu = () => {
  return (
    <div>
        <div id="main-container">
            <div className="html-menu">
                <h1>Projetos HTML/CSS</h1>
                <a href="https://felipedamm.github.io/projetos_html_css/Blog/index.html">Blog</a>
                <a href="https://felipedamm.github.io/projetos_html_css/cópia Instagram inicial/index.html">Cópia Pagina inicial Instagram</a>
                <a href="https://felipedamm.github.io/projetos_html_css/Formulário Básico/index.html">Formulário básico</a>
                <a href="https://felipedamm.github.io/projetos_html_css/Tela inicial empresa/index.html">Tela inicial empresa</a>
                <a href="https://felipedamm.github.io/projetos_html_css/Tela inicial Google/index.html">Cópia Google</a>
                <a href="https://felipedamm.github.io/projetos_html_css/Tela inicial netflix/index.html">Cópia users Netflix</a>
            </div>
        </div>
    </div>
  )
}

export default HTMLCSSMenu