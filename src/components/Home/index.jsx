import React, { useEffect } from 'react';
import "./style.css";

import Senhor from "../../assets/main/slide1.png"
import Moça from "../../assets/main/slide2.png"
import Senhora from "../../assets/main/slide3.png"
import Rapaz from "../../assets/main/slide4.png"
import Title from "../../assets/main/title.png"
import Subtitle from "../../assets/main/text.png"

import Video from "../../assets/main/video.mp4"

import slideEffect from '../../utils/slideEffect';

function Home() {
  useEffect(() => {
    slideEffect()
  })

  return (
    <main id="home">
      <img src={Senhor} alt="" className="slide1" id="imagem1" />
      <img src={Moça} alt="" className="slide2" id="imagem2" />
      <img src={Senhora} alt="" className="slide3" id="imagem3" />
      <img src={Rapaz} alt="" className="slide4" id="imagem4" />
      
      <div className="box-video" id="video">
        <h1 className='title'>NUTROLOGIA</h1>
        <h1 className='subtitle'>NUTRIÇÃO E TREINAMENTO</h1>
        <div>
          <video src={Video} controls></video>
          <p className='desc-main'>
            Alcance seus objetivos com profissionais qualificados,
            <br />
            respeitados e focados na sua saúde
          </p>
        </div>
      </div>

    </main>
  );
}

export default Home;
