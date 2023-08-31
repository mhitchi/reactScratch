const domContainer = document.getElementById('root');


const newElement = React.createElement( 'p', { className: 'my-class' }, 'This is a test paragraph');
console.warn( newElement );

ReactDOM.render( newElement, domContainer );