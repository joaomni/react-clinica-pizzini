import React from 'react';
import "./style.css"

function Error() {
  return (
    <section className="error">

      <div className="content-error">

        <div className="box-error">
          <div className="error1">
            <h5>ERRO 1: NÃO TER ACOMPANHAMENTO MÉDICO</h5>
            <p>
              Seguir estratégias sem a orientação e o acompanhamento de um
              profissional médico pode ser muito arriscado. Um projeto
              personalizado e bem sucedido
              <span> requer a uma cuidadosa análise de parâmetros clínicos e a construção
                de um projeto personalizado.</span>
            </p>
          </div>
          
          <div className="error2">
            <h5>ERRO 2: NÃO TER ORIENTAÇÃO NUTRICIONAL</h5>
            <p>
              Tentar fazer ajustes alimentares por conta própria ou seguir
              receitas prontas da internet,
              <span> sem </span>
              ter a
              <span> orientação de um profissional habilitado e experiente. </span>
               Seguir um plano alimentar sem contar com uma avaliação física
                prévia pode ser um grande erro.
            </p>
          </div>

          <div className="error3">
            <h5>ERRO 3: NÃO TER ORIENTAÇÃO E AUXÍLIO NOS TREINOS</h5>
            <p>
              O seguimento de um programa de exercícios elaborado
              <span> por um profissional que é referência mundial </span>
              no assunto é marca presente nos casos de sucesso. Quando elaborado
              em conjunto com as estratégias clínicas e nutricionais a chance de
              sucesso aumenta muito.
            </p>
          </div>
        </div>

      </div>
      
    </section>
  );
}

export default Error;
