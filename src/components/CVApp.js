import React from "react";
import Personal from './Personal';
import Skills from './Skills';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';

export default class CVApp extends React.Component{
    render(){
        return(
            <div className="components-container">
                <header>CV App</header>
                <div className="left-container">
                    <Personal/>
                    <Skills/>
                </div>
                <div className="right-container">
                    <Summary/>
                    <Experience/>
                    <Education/>
                </div>
            </div>
        )
    }
}