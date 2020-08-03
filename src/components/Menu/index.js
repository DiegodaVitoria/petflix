import React from 'react';
import Logo from '../../assets/img/logo.png'
import "./menu.css"
import Button from '../../components/Button/index'

function Menu(){
 return(
  <nav className="Menu">
   <a href="/">
    <img className="Logo" src={Logo} alt="PetFlix Logo"/>
   </a>

   <Button as="a" className="ButtonLink" href="/">
     Add vídeo
   </Button>
  </nav>
 );
}

export default Menu;