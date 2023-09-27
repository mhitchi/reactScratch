import React from 'react';
import { Router } from '@reach/router';
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

    formatName = ( user ) => {
        //backtick is for string and variable concat
        return `Super ${user}`;
    }

    render() {
        //example 1
        const element = <h1>Hello World</h1>;
        let name;
        if (this.state.name) {
            name = this.state.name;
        } else {
            name = "you";
        }
        //example 2
        const elementTwo = <h2>Hello, {name}</h2>

        //example 3
        const elementThree = (
            <div className="my-class">
                <h2>Hello, { this.formatName( name ) }</h2>
                <label htmlFor="name">
                    <input type="text" id="name">

                    </input>
                </label>
            </div>
        )
        //example four
        const myUser = {
            avatarUrl: "https://via.placeholder.com/150"
        };

        const elementFour = <img src={ myUser.avatarUrl} alt="My image"/>

        return(
            <Router>
                <Home path="/"/>
                <About path="/about/"/>
                <Contact path="/contact-us/"/>
            </Router>
            // <div>
            //     {element}
            //     {/* <h3>This is the component.</h3> */}
            //     <button onClick={this.handleButtonClickEvent}>Click me</button>
            //     {/* { this.state.name && <p>{this.state.name}</p> } */}
            //     <img src={Lydia} alt="Lydia image"/>
            //     <div>
            //         <div>{element}
            //         {elementTwo}
            //         {elementThree}
            //         {elementFour}</div>
            //         {/* <ClassComponent/>
            //         <FunctionalComponent/>
            //         <AnotherComponent/> */}
            //     </div>
            // </div>
        )
    }
}

//would be export const if multiple
export default App