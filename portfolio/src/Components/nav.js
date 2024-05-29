//nav bar with links 
// right corner have 
    //Linkedin 
    //Github
    //Email 
    //Resume

    //clicking those links will open that link in a separate page

//Make it phone compatible 

import React from 'react'
import { NavLink } from 'react-bootstrap'

const Nav = () => {

const Linkedin = 'https://www.linkedin.com/in/jace-banford-byington/';
const Github = 'https://github.com/Jace-Banford-Byington'
const Email = 'mailto:jacebanfordbyington@gmail.com'; //make it open new email message with to line being to jacebanfordbyington@gmail.com
const Resume = './public/banfordbyington_jace_BSWD.pdf'; //have download file

const goTo = (url, isDownloaded = false) => {
    if(isDownloaded){
      //tempary ancore element to trigger download 
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
      else{
        window.open(url, '_blank');
      }
    }
}





  return (
    <>
     <div>
      <NavLink to='/'> Home</NavLink>
      Hello there loser


    
    </div>
    <button onClick={() => goTo(Linkedin)}>Linkedin</button>
    <button onClick={() => goTo(Github)}>Github</button>
    </>
  )   

export default Nav