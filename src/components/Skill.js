import React from 'react';

class Skill extends React.Component {
    render() {
        return (<div>
            <h4>{this.props.skillName}</h4>
            <div className="proficiency-container">
                {
                    [...Array(this.props.skillProficiency)].map((e, i) => 
                        <div className="proficiency-box" key={i}></div>)
                }
            </div>
            
            <button onClick={() => this.props.handleDeleteSkill(this.props.skillName)} 
            type="button"
            className="left btn left--delete"
            >X</button>
        </div>)
    }
    
}

export default Skill;