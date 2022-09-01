import React from 'react';
import Skill from './Skill';

export default class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skills : [{
                name: "JavaScript",
                proficiency: 5,
                isSkillEditing: false
            },
            {
                name: "Python",
                proficiency: 3,
                isSkillEditing: false
            }],
            addNewSkill: false
        };
        this.handleAddMode = this.handleAddMode.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleDeleteSkill = this.handleDeleteSkill.bind(this);
    }

    handleAddMode() {
        this.setState({ addNewSkill: true });
    }

    // handleSkillEdit(e){
    //     this.setState({ 
    //         [e.target.name]: e.target.value
    //     });
    // }
    
    handleAddSubmit(e){
        e.preventDefault();
        const newSkillName = e.target.elements.skillName.value.trim();
        const newSkillProficiency = e.target.elements.skillProficiency.value.trim();

        const skill = {
            name: newSkillName,
            proficiency: parseInt(newSkillProficiency),
            isSkillEditing: false
        }

        this.setState((prevState) =>{ 
            return {
                skills: prevState.skills.concat(skill),
                addNewSkill: false
            };
        });
    }

    handleDeleteSkill(skillToRemove){
        this.setState((prevState) => {
            return {
                skills: prevState.skills.filter((skill) => skill.name !== skillToRemove)
            }
        })
    }

    render() {
        const { skills, addNewSkill } = this.state;

        const addSkillsTemplate = (
            <div>
                <form onSubmit={this.handleAddSubmit}>
                    <label htmlFor="skillName">*Skill Name:</label>
                    <input type="text" id="skillName" name="skillName" required></input>
                    <label htmlFor="skillProficiency">Skill proficiency:</label>
                    <select id="skillProficiency" name="skillProficiency">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button 
                        type="submit" 
                        className="left btn-submit--left"
                    >Submit</button>
                </form>
            </div>
        )

        const viewSkillsTemplate = (
            <div>
                <h3 className="section-container">Skills</h3>
                <button 
                    onClick={this.handleAddMode}
                    className="left btn edit"
                >+</button>
                {addNewSkill && addSkillsTemplate}
                {
                    skills.map((skill, index) => (
                    <Skill 
                        key={index}
                        skillName={skill.name} 
                        skillProficiency={skill.proficiency}
                        handleDeleteSkill={this.handleDeleteSkill}
                    />
                    ))
                }
            </div>
        )

        return (
            viewSkillsTemplate
        )
    }
} 