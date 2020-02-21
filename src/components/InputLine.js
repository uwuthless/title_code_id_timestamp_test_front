import React from 'react';
import Input from "./Input";
import '../App.css'

class InputLine extends React.Component {
    state = {
        title: '',
        code: '',
        id: 0,
        type: '',
        meta: {disabled: false}

    };

    changeTitle = (title) => {
        this.setState({...this.state, title})
    };
    changeCode = (code) => {
        this.setState({...this.state, code})
    };
    changeId = (id) => {
        this.setState({...this.state, id})
    };
    changeType = (type) => {
        this.setState({...this.state, type})
        console.log(`there is a new value ${type}`)
    };

    isDisabled(){ return this.state.meta.disabled}

    render() {
        return (
            <div className="input-line">
                <Input label="Title" value={this.state.title} change={this.changeTitle} {...this.state.meta} />
                <Input label="Code" value={this.state.code} change={this.changeCode}  {...this.state.meta} />
                <Input label="Id" value={this.state.id} change={this.changeId}  {...this.state.meta} />
                <Input label="Type" value={this.state.type} change={this.changeType}  {...this.state.meta} />
                <button className= {`ui ${this.isDisabled() ?  'negative' : 'primary' } basic button`}
                        onClick={()=>{ this.setState({...this.state, meta: {disabled:!this.state.meta.disabled}})
                            console.log(123) }}
                >
                    {this.isDisabled() ?  'Сохранить' : 'Изменить'}
                </button>
            </div>
        );
    }
}

export default InputLine;
