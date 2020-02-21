import React from 'react';

//import '../App.css'
class Input extends React.Component{
    state = {};


    render() {
        return (
            <div style={{display: "inline-block"}} className="ui labeled input">
                <label style={{marginLeft: '0.5rem'}} className="ui label">{this.props.label}</label>
                <input
                    disabled={!this.props.disabled}
                    value = {this.props.value} onChange={ event => this.props.change(event.target.value)}/>
            </div>
        );
    }


}

export default Input;
