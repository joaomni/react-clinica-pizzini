import React from 'react';
import "./style.css"

import Clinical from "../../assets/clinic.png"
import Porta from "../../assets/about/clinic1.jpeg"
import Sala from "../../assets/about/clinic2.jpeg"
import Consultorio from "../../assets/about/clinic3.jpeg"

function Clinic() {
  return (
    <section className="c-clinic">
      <div className="box-clinic">
        <img src={Clinical} className='img-desktop' />
        <img src={Porta} className='img-mobile'/>
        <img src={Sala} className='img-mobile'/>
        <img src={Consultorio} className='img-mobile'/>
      </div>
    </section>
  );
}

export default Clinic;
