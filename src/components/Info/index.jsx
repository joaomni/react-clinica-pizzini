import React from 'react';
import "./style.css"

import Icon1 from "../../assets/icons/diet.png"
import Icon2 from "../../assets/icons/hipertrofia.png"
import Icon3 from "../../assets/icons/performance.png"
import Icon4 from "../../assets/icons/saude.png"

import Border from "../../assets/icons/border1.png"

function Info() {
  return (
    <section className="c-skills">
      <div className="skills">

        <div className="skill">
          <div className="borda eixo-zero">
            <img src={Border} />
          </div>

          <img src={Icon4} alt="Perfomance" className='eixo-zero'/>
          <br />
          <h1 className='eixo-zero'>SAÚDE</h1>
          <p className='eixo-zero'>
            Se o seu objetivo é simplesmente manter uma alimentação equilibrada e saudável, visando saúde e qualidade de vida, podemos te assessorar da melhor forma para que tenha sucesso nessa mudança, de maneira eficaz e prolongada.
          </p>
        </div>

        <div className="skill">
          <div className="borda eixo-zero">
            <img src={Border} />
          </div>
          <img src={Icon1} alt="Emagrecimento" className='eixo-zero'/>
          <br />
          <h1 className='eixo-zero' >EMAGRECIMENTO</h1>
          <p className='eixo-zero'>
            Através de uma análise detalhada do seu dia a dia, podemos ajustar sua rotina de treinos e alimentação, para que obtenha condição total de emagrecer com saúde e qualidade, seja para fins de saúde ou para definição muscular.
          </p>
        </div>

        <div className="skill">
          <div className="borda eixo-zero">
            <img src={Border} />
          </div>

          <img src={Icon3} alt="Perfomance" className='eixo-zero'/>
          <br />
          <h1 className='eixo-zero'>PERFORMANCE</h1>
          <p className='eixo-zero'>
            Para você que é um atleta amador ou profissional, que deseja melhorar seu desempenho e potencializar seus resultados, temos uma estratégia personalizada para você, que também será ajustada a sua rotina e individualidade.
          </p>
        </div>

        <div className="skill">
          <div className="borda eixo-zero">
            <img src={Border} />
          </div>

          <img src={Icon2} alt="Hipertrofia" className='eixo-zero'/>
          <br />
          <h1 className='eixo-zero'>HIPERTROFIA</h1>
          <p className='eixo-zero'>
            E você deseja ganhar massa muscular? Vamos te passar todas as diretrizes e métodos a serem seguidos para que alcance o objetivo de forma eficaz e com total segurança.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Info;
