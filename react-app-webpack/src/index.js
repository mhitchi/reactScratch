import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";

//first what we're inserting, second where we're inserting
//ReactDOM.render( <App/>, document.getElementById('root') );
const root = createRoot(document.getElementById('root'));
root.render(<App />);