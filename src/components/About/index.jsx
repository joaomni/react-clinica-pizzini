import React from 'react';
import "./style.css"

import image from "../../assets/about/about.png"

function About() {
  return (
    <section className="c-info">
      <div className="box-info">
        <div className="info-title">
          <h1>SOBRE A NUTROLOGIA</h1>
        </div>

        <div className="box-card">
          <div className="card-flex">
            <div className="card-1">
              {/* <img src={Card1} alt="" /> */}
              <h1>NUTROLOGIA</h1>
              <p>
                “Nutrologia é a especialidade médica que estuda, pesquisa e
                avalia os benefícios e malefícios causados pela ingestão dos
                nutrientes, aplicando este conhecimento para a avaliação de
                nossas necessidades orgânicas, visando a manutenção da saúde e
                redução de risco de doenças (…)”.
              </p>
            </div>
            <div className="card-2">
              {/* <img src={Card2} alt="" /> */}
              <h1>COMPLEMENTO</h1>
              <p>
                O Nutrólogo do Esporte pode atuar com outros especialistas, como
                Médico do Esporte, Cardiologista do Esporte e Endocrinologista
                do Esporte, quando o objetivo é potencializar os resultados,
                aprimorando a performance e desempenho físico dos atletas
                profissionais e amadores.
              </p>
            </div>
          </div>

          <div className="about-image">
            <img src={image} alt="" />
          </div>

          <div className="card-flex">
            <div className="card-3">
              {/* <img src={Card3} alt="" /> */}
              <h1>BENEFÍCIOS</h1>
              <p>
                A Nutrologia esportiva é a área responsável pela
                associação entre os conceitos nutrológicos fundamentais e os
                aspectos bioquímicos e fisiológicos do treinamento desportivo.
              </p>
            </div>
            <div className="card-4">
              {/* <img src={Card4} alt="" /> */}
              <h1>OBJETIVOS</h1>
              <p>
                Entre os principais objetivos da Nutrologia Esportiva estão: a melhora da saúde, 
                o desenvolvimento do desempenho físico, a readequação da composição corporal e 
                a recuperação correta após os exercícios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
