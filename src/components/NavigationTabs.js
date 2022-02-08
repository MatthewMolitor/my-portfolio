import React, { useState } from 'react';
import AppMode from './AppMode';

function NavigationTabs(props) {
    const handleModeChange = e => {
        props.setMode(e.target.value);
    }
    
       return (
        <div id="navTabs"
                className={"navtab-container" + (props.menuOpen ? " disabled" : "")}
                role="tablist"
                aria-label="App Modes">
                <button id="profileMode" type="button"
                    className={"navtab-btn" +
                        (props.mode === AppMode.FEED ? " navtab-selected" : "")}
                    role="tab" tabIndex="0" aria-selected="true"
                    aria-controls="profileModeTab"
                    onClick={handleModeChange}
                    value={AppMode.PROFILE}>
                    Profile
                </button>
                <button id="aboutMode" type="button"
                    className={"navtab-btn" +
                        (props.mode === AppMode.FEED ? " navtab-selected" : "")}
                    role="tab" tabIndex="0" aria-selected="true"
                    aria-controls="aboutModeTab"
                    onClick={handleModeChange}
                    value={AppMode.ABOUT}>
                    About
                </button>
            </div>
    ); 
  }


export default NavigationTabs;