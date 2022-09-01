import React from 'react';

export default class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: `Default Summary`,
            isEditing: false
        };
        this.handleSummaryEdit = this.handleSummaryEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSummaryEdit(){
        this.setState({
            isEditing: true
        })
    }

    handleChange(e){
        this.setState({
            summary: e.target.value.trim()
        })
    }

    handleSubmit(){
        this.setState({
            isEditing: false
        })
    }

    render(){
        const { summary, isEditing } = this.state;

        const viewTemplate = (
            <div>
                <h3 className="section-container">Summary</h3>
                <button className="btn edit-right" 
                    onClick={this.handleSummaryEdit}
                >Edit</button>
                <p className="summary-text">{summary}</p>
            </div>
        )

        const editTemplate = (
            <div>
                <label htmlFor="summary">Edit:</label>
                <textarea id="summary" name="summary" onChange={this.handleChange} value={summary}></textarea>
                <button onClick={this.handleSubmit}
                    className="btn-submit--right"
                >Update</button>
            </div>
        )

        return(
            <div>{isEditing ? editTemplate : viewTemplate}</div>
        )
    }
    
}