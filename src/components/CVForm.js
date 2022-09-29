import React from 'react'
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import FormControls from "./FormControls";

function CVForms(){
    const {formControls,clear} = FormControls();
    return(
        <>
            <Personal clear = {clear}/>
            <Experience clear = {clear}/>
            <Education clear = {clear}/>
            {formControls}
        </>
    )
}

export default CVForms