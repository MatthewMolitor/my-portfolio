import React, { useState } from 'react';
import AppMode from './AppMode';

function About(props) {
    
    
       return (
<>
      <div className='App-body'>
        <div className='App-sub-body'>
          <p className='centered'>
            My name is Matthew Molitor, I am an aspring software developer originally from Oak Habor Washington.
            I graduated from Washington State University in 2021 with a bachelors in computer science and a minor in 
            psychology. My interests include: Judo, mycology, and tabletop roleplaying games.
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


export default About;