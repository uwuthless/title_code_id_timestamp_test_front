import React from 'react';
import Input from "./Input";
import '../App.css'
import axios from 'axios'

class InputLine extends React.Component {
    state = {
        title: this.props.title,
        code: this.props.code,
        id: this.props.id,
        meta: {disabled: true}

    };

    changeTitle = (title) => {
        this.setState({...this.state, title})
    };
    changeCode = (code) => {
        this.setState({...this.state, code})
    };


    isDisabled(){ return this.state.meta.disabled}

    render() {
        return (
            <div className="input-line">
                <Input label="Title" value={this.state.title} change={this.changeTitle} {...this.state.meta} />
                <Input label="Code" value={this.state.code} change={this.changeCode}  {...this.state.meta} />
                <button className= {`ui ${this.isDisabled() ?  'primary' : 'negative' } basic button`}
                        onClick={()=>{
                            if(!this.state.meta.disabled){
                                let params = {
                                    title: this.state.title,
                                    code: this.state.code,
                                    id: this.state.id,
                                    time: Date.now()
                                }
                                axios.post('http://localhost:8000/api/events', params).then((res)=>{
                                    console.log(res)
                                    this.setState({meta: {disabled: true}})
                                })
                            }
                            this.setState({ meta: {disabled:false}})
                             }}
                >
                    {this.isDisabled() ?   'Изменить':'Сохранить'}
                </button>
            </div>
        );
    }
}

export default InputLine;
