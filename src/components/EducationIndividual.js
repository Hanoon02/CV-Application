import React from 'react';

export default class EducationIndividual extends React.Component{
    
    render() {
        const { education } = this.props
        const viewTemplate = (
            <div className="flex-container">
                <div className="flex-years-container">{ education.start } ~ { education.end }</div>
                <div className="flex-info-container">
                    <p className="light-bold">{education.major}</p>
                    <p className="italic">{education.school}</p>
                    <p>{education.detail}</p>
                </div>
                <button onClick={ ()=> this.props.handleDeleteEdu(this.props.eduIndex)}
                        className="btn right--delete"
                    >X</button>
            </div>
        )

        return (
            viewTemplate
        )
    }
}