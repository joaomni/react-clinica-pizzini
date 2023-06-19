import React from 'react';
import "./style.css"

function Road() {
  return (
    <section className="roads" id="avaliacao">

      <div id="box-road">

        <div className="road" id="road1">
          <h1>CAMINHO 1</h1>
          <p>
            O primeiro caminho é aquele que, infelizmente, a maioria tem
            seguido. São pessoas que seguem planos prontos achados na internet,
            ignorando as necessidades e individualidades do seu corpo e, na
            grande parte dos casos, decidem frequentar a academia sem uma
            avaliação física e sem um planejamento personalizado de treinamento,
            além de mergulharem de cabeça nas “modinhas” que diariamente surgem
            por aí…
            <br />
            <br />
            <span>Obviamente, esta é uma estratégia falha, que acaba sendo um dos grandes fatores 
              que te afastam dos seus objetivos reais</span>
          </p>
        </div>

        <div className="road" id="road2">
          <h1>CAMINHO 2</h1>
          <p>
            O segundo caminho, que poucos conseguem trilhar, é o caminho do
            sucesso. são pessoas
            <span> que conseguiram emagrecer, ganhar massa muscular, performar em seu
              esporte ou mesmo mudar seus hábitos de vida, seguindo um modelo
              planejado, </span>
            orientado e totalmente personalizado para cada indivíduo.
          </p>
        </div>
        
      </div>

    </section>
  );
}

export default Road;
