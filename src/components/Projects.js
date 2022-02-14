import React, { useState } from 'react';
import AppMode from './AppMode';

function Projects(props) {
    
    
       return (
<>
      <div className='projects-body'>
        <div className='projects-body'>
          <p className='centered'>
            These are my Projects
          </p>
          <p className='centered'>
            <a href="https://colab.research.google.com/drive/1tlmd4mRJKPJX922NeIkDGVYxe6xKX35G?usp=sharing">Pokemon Team builder:</a>
            used data scraped from teams used in tournaments to create 
            suggestions for entirely new teams that can be applied to different competitive formats
          </p>
          <p className='centered'>
            <a href={process.env.PUBLIC_URL + 'images/reddit_prediction.pdf'}>Reddit:</a>
            Parsed ban data from several subreddits to build a binary ban predictor for reddit posts.
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