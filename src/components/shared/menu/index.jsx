import React from "react"

import "./style.css"

function Menu() {
  return (

        <div className="menu">
            <ul>
                <li>
                  <a href="#home">ÍNICIO</a>
                </li>
                <li>
                  <a href="#agendar">AGENDAR CONSULTA</a>
                </li>
                <li>
                  <a href="#clinic">CONSULTÓRIO</a>
                </li>
                <li>
                  <a href="#avaliacao">AVALIAÇÃO</a>
                </li>
                <li>
                  <a href="#contato">FALE CONOSCO</a>
                </li>
            </ul>
        </div>
  );
}

export default Menu;
