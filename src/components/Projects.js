import React, { useState } from 'react';
import AppMode from './AppMode';

function Projects(props) {
    
    
       return (
<>
      <div className='App-body'>
        <div className='App-sub-body'>
          <p className='centered'>
            These are my Projects
          </p>
        </div>
      </div>
      <div className='App-footer'>
        <a href='https://github.com/MatthewMolitor'><img src = {process.env.PUBLIC_URL + 'images/github.png'} alt='github logo' height={'50'} width={'50'}/></a>
        <a href='https://www.linkedin.com/in/matthewemolitor/'><img src = {process.env.PUBLIC_URL + 'images/linkedin.png'} alt='linkedin logo' height={'50'} width={'50'}/></a>
      </div>
</>
    ); 
  }


export default Projects;