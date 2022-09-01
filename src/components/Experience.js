import React from 'react';
import ExpIndividual from './ExpIndividual';

export default class Experience extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            experience: [{
                company: 'A good company',
                position: 'future software engineer',
                start: '2017-12',
                end: '2020-12',
                present: false,
                responsibilities: 'exampl1'
            },{
                company: 'company2',
                position: 'company2-main',
                start: '2017-12',
                end: '2020-12',
                present: false,
                responsibilities: 'exampl1'
            }],
            addNewExp: false,
            presentChecked: false
        };
        this.handleAddExp = this.handleAddExp.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handlePresentClick = this.handlePresentClick.bind(this);
        this.handleDeleteExp = this.handleDeleteExp.bind(this);
    }
    // Methods for adding new experience
    handleAddExp(){
        this.setState({
            addNewExp: true
        })
    }

    handlePresentClick(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            presentChecked: value
        })
    }

    handleAddSubmit(e){
        e.preventDefault();

        const end = this.state.presentChecked ? 'Present' : e.target.end.value

        const newExp = {
            company: e.target.compnay.value.trim(),
            position: e.target.position.value.trim(),
            start: e.target.start.value,
            end: end,
            present: this.state.presentChecked,
            responsibilities: e.target.responsibilities.value.trim()
        }

        this.setState((prevState)=>{
            return {
                experience: prevState.experience.concat(newExp),
                addNewExp: false
            }
        })
    }

    handleCancel(){
        this.setState((prevState) => {
            return {
                experience: prevState.experience,
                addNewExp: false
            }
        })
    }

    // Methods for each experience


    handleDeleteExp(expToRemove){
        this.setState((prevState)=>{ 
            return {
                experience: prevState.experience.filter((_, i) => i !== expToRemove)
            }})
    }


    render(){
        const { experience, addNewExp } = this.state;

        const addTemplate = (
            <div className="exp-add-container">
                <form onSubmit={this.handleAddSubmit}>
                    <label htmlFor="position">*Position:</label>
                    <input type="text" name="position" id="position" required />
                    <label htmlFor="company">*Company:</label>
                    <input type="text" name="compnay" id="company" required />
                    <label htmlFor="start">*Start:</label>
                    <input type="date" name="start" id="start" required />
                    <label htmlFor="end">End:</label>
                    <input type="date" name="end" id="end" disabled={this.state.presentChecked && true} />
                    <label htmlFor="untilPresent">Present</label>
                    <input type="checkbox" id="untilPresent" name="present" checked={this.state.presentChecked} onChange={this.handlePresentClick} />
                    <label htmlFor="responsibilities">Responsibilities:</label>
                    <textarea name="responsibilities" id="responsibilities" />
                    <button type="submit" className="btn-submit--right">Add</button>
                    <button className="btn-submit--right" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )

        const viewTemplate = (
            <div className="experience-container">
                <h3 className="section-container">Experience</h3>
                <button className="btn edit-right" 
                    onClick={this.handleAddExp}
                >+</button>
                {addNewExp && addTemplate}
                {
                    experience.map((exp, index) => (
                            <ExpIndividual 
                            key={index}
                            expIndex={index}
                            expCompany={exp.company}
                            expPosition={exp.position}
                            expStart={exp.start}
                            expEnd={exp.end}
                            expPresent={exp.present}
                            expResp={exp.responsibilities}
                            handleDeleteExp={this.handleDeleteExp}
                        />   
                    ))
                }
            </div>
        )

        return(
            viewTemplate
        )
    }
}