import React from "react"

import Menu from "../shared/menu"

import "./style.css"
import Logo from "../../assets/main/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF, faSpotify } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  return (
    <header id="navbar">
      <nav className="box-nav">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <Menu />

        {/* Socil Icons */}
        <div className="social-links">
          <ul>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5515998719454&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20agendamento%20com%20o%20Dr.%20F%C3%A1bio%20Pizzini!">
                <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#ffffff",}} /> 
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/drfabiopizzini/">
                <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}} /> 
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/drfabiopizzini">
                <FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#ffffff",}} /> 
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/show/2TiYZD6Ip8rufl7sjr4xO8?si=7069037074a048d9&nd=1">
                <FontAwesomeIcon icon={faSpotify} size="xl" style={{color: "#ffffff",}} /> 
              </a>
            </li>
          </ul>
        </div>

        {/* Socil Icons */}

      </nav>
    </header>
  );
}

export default Navbar;
