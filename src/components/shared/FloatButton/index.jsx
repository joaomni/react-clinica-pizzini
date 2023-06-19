import React from "react";
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function FloatButton() {
  return (
    <div className="float-button">
        <a className="float-button" href="https://api.whatsapp.com/send?phone=5515998719454&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20agendamento%20com%20o%20Dr.%20F%C3%A1bio%20Pizzini!">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{color: "#ffffff", marginTop: 10}} /> 
        </a>
    </div>
  );
}

export default FloatButton
