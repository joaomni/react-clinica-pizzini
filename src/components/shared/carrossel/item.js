import React from "react";

function Item() {
  return (
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
  );
}

export default Item
