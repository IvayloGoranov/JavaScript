import React from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <label htmlFor={this.props.name}>{this.props.placeholder}</label>
                <input
                    type='text'
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onInputChange} />
                <span className="error">{this.props.error}</span>
            </div>
        )
    }
}
