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

  //called
  static getDerivedStateFromProps( props, state) {
    console.warn( props );
    return null
  }

  //if state or props change, render is called again
  render() {
    return (
      <Home data="Some data"/>
    )
  }
}

export default App;
