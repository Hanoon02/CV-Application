import React from 'react';
import EducationIndividual from './EducationIndividual';

export default class Education extends React.Component{
    constructor(props){
        super(props)
        this.state={
            school: '',
            major: '',
            start: '',
            end: '',
            detail: '',
            education:[{
                school: 'Sample',
                major: 'Sample',
                start: 'start',
                end: 'end',
                detail: ''
            }],
            addEdu: false,
            presentChecked: false
        }
        this.handleAddEdu = this.handleAddEdu.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePresentClick = this.handlePresentClick.bind(this);
        this.handleDeleteEdu = this.handleDeleteEdu.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleAddEdu(){
        this.setState((prevState)=>{
            return {
                addEdu: !prevState.addEdu
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const { school, major, start, presentChecked, end, detail } = this.state;
        const endValue = presentChecked ? 'Present' : e.target.end.value
        const newEducation = { school,  major, start, end: endValue, detail }
        
        this.setState((prevState)=>{
            return {
                education: prevState.education.concat(newEducation),
                addEdu: !prevState.addEdu
            }
        })
    }

    handlePresentClick(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            presentChecked: value
        })
    }

    handleDeleteEdu(eduToRemove){
        this.setState((prevState)=>{ 
            return {
                education: prevState.education.filter((_, i) => i !== eduToRemove)
            }})
    }

    handleCancel(){
        this.setState((prevState) => {
            return {
                addEdu: false
            }
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { education, addEdu } = this.state;

        const addTemplate = (
            <div className="education-add-container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="major">Major:</label>
                    <input type="text" name="major" id="major" onChange={this.handleChange} required />
                    <label htmlFor="school">School:</label>
                    <input type="text" name="school" id="school" onChange={this.handleChange} required />
                    <label htmlFor="start">Start:</label>
                    <input type="date" name="start" id="start" onChange={this.handleChange} required />
                    <label htmlFor="end">End:</label>
                    <input type="date" name="end" id="end" onChange={this.handleChange} disabled={this.state.presentChecked && true} />
                    <label htmlFor="untilPresent">Present</label>
                    <input type="checkbox" id="untilPresent" name="present" 
                        checked={this.state.presentChecked} 
                        onChange={this.handlePresentClick} 
                        />
                    <label htmlFor="detail">Detail:</label>
                    <textarea name="detail" id="detail" onChange={this.handleChange} />
                    <button type="submit" className="btn-submit--right">Add</button>
                    <button className="btn-submit--right" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )

        const viewTemplate = (
            <div className="education-container">
                <h3 className="section-container">Education</h3>
                <button className="btn edit-right" onClick={this.handleAddEdu}>+</button>
                {addEdu && addTemplate}
                { education.map((edu, index) => (
                    <EducationIndividual
                        key={index}
                        eduIndex={index}
                        education={edu}
                        handleDeleteEdu={this.handleDeleteEdu}
                    />
                ))}
            </div>
        )

        return (
            viewTemplate
        )
    }
}