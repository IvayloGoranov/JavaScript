import React from 'react';
import Input from './Input';

export default class BookForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <form>
                <Input name="title"
                       placeholder="Title"
                       value={this.props.title}
                       onInputChange={this.props.onInputChange}
                       error={this.props.errors.title}/>
                 <Input name="author"
                        placeholder="Author"
                        value={this.props.author}
                        onInputChange={this.props.onInputChange}
                        error={this.props.errors.author}/>
                 <button type='submit' onClick={this.props.onSave}>{this.props.buttonValue}</button>
            </form>
        )
    }
}