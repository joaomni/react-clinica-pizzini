import React from 'react';
// import Slide from '../shared/carrossel';

import Erro from "../../assets/icone-clinica-erros.png"
import Line from "../../assets/line.png"
import "./style.css"

function Feedback() {
  return (
    <section className="c-feedback">

      <div className="box-feedback">

        <div className="feedback-title">
          <h1>DEPOIMENTOS</h1>
        </div>

        <div className="slide-trustindex">
          <div src='https://cdn.trustindex.io/loader.js?80dce9b16dad2889c52693c97fb'></div>
        </div>
        {/* <div className="slide-google">
          <div className="google-content">
            <div>
              <img src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" />
            </div>

            <div className="google-stars">
              <span className='star'></span>
              <span className='star'></span>
              <span className='star'></span>
              <span className='star'></span>
              <span className='star'></span>
            </div>

            <div className="google-text">
              <strong>EXCELENTE</strong>
              <p>Com base em <span>47 avaliações.</span></p>
            </div>
          </div>

          <div className='container-carousel'>
            <div className="box-dep">
              <div className="dep-header">
                <img src={Erro}/>
                <div className="dep-title">
                  <h1>Fulano Ciclano</h1>
                  <p>19. Dezembro, 2023</p>
                </div>
                <span className='google-icon'></span>
              </div>
              <div className="dep-star">
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
              </div>

              <div className="dep-text">
                <p>Ótimo atendimento desde a recepção até a consulta, aliás uma 
                  consulta rica em detalhes e explicações... Faz com que vc entenda.
                </p>
              </div>
            </div>
          </div>

          <Slide />
        </div> */}

      </div>

      <div className="line">
        <img src={Line} alt="" />
      </div>
      
    </section>
  );
}

export default Feedback;
