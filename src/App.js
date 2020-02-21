import React from 'react';
import './App.css';
import InputLine from "./components/InputLine";

class App extends React.Component{

    state = {
        lineData: [
        {
            title:'A',
            code: 'B',
            id: 0
        },{
                title:'C',
                code: 'D',
                id: 1
            },
        ]}
    getLines(){
        return this.state.lineData.map(item => {
           return <InputLine {...item}/>
        });
    }
    render() {
     return (
         <div className="App">
             {this.getLines()}
         </div>
     );
 }


}

export default App;
