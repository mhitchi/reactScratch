import React from 'react';
import './style.css';
import Lydia from './images/headshot.png';
import ClassComponent from './components/ClassComponent';
//use curly braces when there are multiple being exported from same file or when the export is not default
import { FunctionalComponent } from './components/FunctionalComponent';
import { AnotherComponent } from './components/FunctionalComponent';

//using ES6 here


class App extends React.Component {
    constructor ( props ) {
        super( props )
        
        this.state = {
            name: ''
        }
    }
    
    handleButtonClickEvent = ( event ) => {
        //"this" points to class App
        this.setState( { name: 'Marm' });
    };

    render() {
        return(
            <div>
                <h1>This is the component.</h1>
                <button onClick={this.handleButtonClickEvent}>Click me</button>
                { this.state.name && <p>{this.state.name}</p> }
                <img src={Lydia} alt="Lydia image"/>
                <div>
                    <ClassComponent/>
                    <FunctionalComponent/>
                    <AnotherComponent/>
                </div>
            </div>
        )
    }
}

//would be export const if multiple
export default App