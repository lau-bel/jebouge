
import React from "react";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";


class Footer extends React.Component {

render(){
  return (
      <div>

        <footer className = "footerstyle">
        <div className = "credits">
        <p>  - Site web : <a href = "https://utilisatrice42.github.io/cv-web/" target="_blank" rel="noopener noreferrer">Belferroum Laura</a>        - Logo : <a rel="noopener noreferrer" target="_blank" href = "https://www.behance.net/LibertRemi?fbclid=IwAR1SjMhqlV6Vz1-R6i-8Oghmi9Na6xLdy_Zg8kgHAEvsnk5aRJcFAJmgZW0">Remi Libert</a>
               - Video (CC-BY-NC-ND) : <a href = "https://www.facebook.com/La-bulle-dAnnia-298859087392147/" target="_blank" rel="noopener noreferrer">La bulle d'Annia</a> 
        <br/>
        
        - Site built with <a href = "https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> </p>
        </div>
          <div className="textfooter" >

                <li className = "collectif"> Collectif "Et ta soeur? "
                <a href="http://www.instagram.com/collectifettasoeur/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="instagram" alt="Instagramlogo"/></a>
                <a href="http://www.facebook.com/collectifettasoeur/" target="_blank" rel="noopener noreferrer"><img src={facebook} className="facebook"  alt="Facebooklogo"/></a>
                </li>
                <li> Vie féminine (Régionale Liège)
                <a href="https://www.facebook.com/viefeminine.liegeregionale.3" target="_blank" rel="noopener noreferrer"><img src={facebook} className="facebook"  alt="Facebooklogo"/></a>
                </li>

          </div>


        </footer>


      </div>
  )
}

}

export default Footer;
