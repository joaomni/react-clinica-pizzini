import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF, faSpotify } from '@fortawesome/free-brands-svg-icons'
import "./style.css"

import Menu from "../shared/menu"

import Logo from "../../assets/footer/logo.png"

function Footer() {
  return (
    <footer className="c-rodape" id="agendar">

      <div className="footer-menu">
        <Menu />
      </div>

      <div className="box-footer">

        <div className="infos">
          <img src={Logo} alt="Clinica Pizzini" />
          <p>
            Av. Comendador Pereira Inácio, 950 - 6º Andar - Sala 661
            <br />
            Jardim Vergueiro - Sorocaba/SP
            <br />
            www.drfabiopizzini.com
          </p>
        </div>

        <div className="contato" id="contato">
          <a href="https://api.whatsapp.com/send?phone=5515998719454&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20agendamento%20com%20o%20Dr.%20F%C3%A1bio%20Pizzini!" className="btn-whats">
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffffff",}}/>
            WHATSAPP
          </a>
        </div>

        <div className="icones">
          <a href="https://www.instagram.com/drfabiopizzini/">
            <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}} /> 
          </a>
          <a href="https://www.facebook.com/drfabiopizzini">
            <FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#ffffff",}} /> 
          </a>
          <a href="https://open.spotify.com/show/2TiYZD6Ip8rufl7sjr4xO8?si=7069037074a048d9&nd=1">
            <FontAwesomeIcon icon={faSpotify} size="xl" style={{color: "#ffffff",}} /> 
          </a>
        </div>
        
      </div>
      
    </footer>
  )
}

export default Footer;
