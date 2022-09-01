import React from 'react';

export default class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 'Jae',
            middle: '',
            last: 'Park',
            email: 'jaebungs@gmail.com',
            github: 'https://github.com/jaebungs',
            linkedIn: 'LinkedIn profile',
            isEditing: false
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditMode() {
        this.setState({ isEditing: true });
    }

    handleChange(e){
        this.setState({ 
            [e.target.name]: e.target.value.trim()
        });
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.setState({ 
            isEditing: false
        });
    }

    render() {
        const { first, middle, last, email, github, linkedIn, isEditing } = this.state

        const viewPersonalTemplate = (
            <div>
                <h1>{first} {middle} {last}</h1>
                <h3 className="section-container">Personal Info</h3>
                <button onClick={this.handleEditMode}
                    className="left btn edit"
                >Edit</button>
                <h4>Email</h4>
                <p>{email}</p>
                {github !== '' && <div>
                    <h4>Github</h4>
                    <p>{github !== '' && github}</p>
                </div>}
                {linkedIn !== '' && <div>
                    <h4>LinkedIn</h4>
                    <p>{linkedIn !== '' && linkedIn}</p>
                </div>}
                
            </div>
        )

        const editPersonalTemplate = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first">*First Name:</label>
                    <input
                        type="text"
                        value={first}
                        id="first"
                        name="first"
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor="first">Middle Name:</label>
                    <input
                        type="text"
                        value={middle}
                        id="middle"
                        name="middle"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="first">*Last Name:</label>
                    <input
                        type="text"
                        value={last}
                        id="last"
                        name="last"
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor="first">*Email:</label>
                    <input
                        type="text"
                        value={email}
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor="first">Github:</label>
                    <input
                        type="text"
                        value={github}
                        id="github"
                        name="github"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="first">LinkedIn:</label>
                    <input
                        type="text"
                        value={linkedIn}
                        id="linkedIn"
                        name="linkedIn"
                        onChange={this.handleChange}
                    />

                    <button type="submit" className="left btn-submit--left">
                        Submit
                    </button>

                </form>
            </div>
        )

        return (
            <div>{ isEditing ? editPersonalTemplate : viewPersonalTemplate }</div>
        )
    }  
}
