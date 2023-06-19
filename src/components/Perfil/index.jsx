import React from 'react';
import "./style.css"

import Pizzini from "../../assets/pizzini.png"
import Gianolla from "../../assets/gianolla.png"

function Perfil() {
  return (
    <section className="c-perfil">

      <div className="perfil-title">
        <h1>QUEM VAI AJUDAR VOCÊ</h1>
      </div>

      <div className="box-perfil">

        <div className="content-perfil">      
          <div className="header-perfil">
            <div id="perfil" className='pizzini'></div>
            <div className='box-text'>
              <strong>Dr. Fábio Pizzini</strong>
              <p>Graduação em Educação Física ACM Sorocaba em 1964</p>
            </div>
          </div>

          <div className="desc">
            <p className="doctor">
            Graduado em Medicina pela PUC/SP
            <br/>
            Pós-graduado em Nutrologia pela Associação Brasileira de Nutrologia - ABRAN
            <br/>
            Pós-graduado em Nutrologia Esportiva pelo BWS/ABRAN
            <br/>
            Pós-graduado em Nutrição e Fisiologia Aplicadas ao Exercício - Uniguaçu
            <br/>
            Cursos de Capacitação em Nutrologia Esportiva - ABRAN
            <br/>
            Certificação Advanced Nutrition Specialist - International Ferdaration of Body Building and Fitness - IFBB
            <br/>
            Pós-graduação em Medicina do Exercício e do Esporte - Instituto Vita
            </p>
          </div>
        </div>
        
        <div className="content-perfil">      
          <div className="header-perfil">
            <div id="perfil" className='gianolla'></div>
            <div className='box-text'>
              <strong>Fábio Gianolla</strong>
              <p>Graduação em Educação Física ACM Sorocaba em 1964</p>
            </div>
          </div>

          <div className="desc">
            <p className="doctor">
              Formado em Educação Física FEFISO ACM
              Mestrado em Educação e Saúde – PUC SP
              Graduação em Nutrição – UNIDER
              Especialização em Ciência da Musculação FMU SP
              Especialização em Ginástica Postural Global FMU SP
              Especialização em Exercícios Resistidos na Saúde/Doença e Envelhecimento – Faculdade de Medicina da USP
              Professor de Graduação e Pós-graduação FEFISO ACM
              Árbitro Internacional em Musculação pela IFBB, NABBA e WFF
              Palestrante Black Skull
              Especialização em Treinamento de Força – Moscou / Rússia
              Autor dos livros: Musculação Conceitos Básicos – Ed. Man0le e Execícios de Musculação – uma abordagem técnica – Ed. Revinter
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Perfil;
