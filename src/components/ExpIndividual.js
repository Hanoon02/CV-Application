import React from 'react';

export default class ExpIndividual extends React.Component{

    render(){
        return (
            <div className="flex-container">
                <div className="flex-years-container">{ this.props.expStart } ~ { this.props.expEnd }</div>
                <div className="flex-info-container">
                    <p className="light-bold">{ this.props.expPosition }</p>
                    <p className="italic">{ this.props.expCompany }</p>
                    <p>{ this.props.expResp }</p>
                </div>
                <button onClick={()=> this.props.handleDeleteExp(this.props.expIndex)}
                    className="btn right--delete"
                >X</button>
            </div>
        )
    }
}