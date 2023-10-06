import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  //initialize state
  constructor( props ) {
    //makes this.props available by overriding parent constructor method by redefining it
    super( props );
  }

  //called 1, 3, 4
  static getDerivedStateFromProps( props, state) {
    console.warn( 'getDerivedStateFromProps is called' );
    console.warn( 'props:', props );
    console.warn( 'state:', state );
    return null
  }

  handleClickEvent = () => {
    // this.setState( { name: 'Marm'} );
    this.forceUpdate( () => {
      //called 2
      console.warn( 'The component is updated');
      this.setState( { name: 'Marm'} );
    })
  }

  //if state or props change, render is called again
  render() {
    return (
      <div>
        <Home data="Some data"/>
        <button onClick={this.handleClickEvent}>Click here</button>
      </div>
    )
  }
}

export default App;
