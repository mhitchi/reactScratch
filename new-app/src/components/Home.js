import React from 'react';
class Home extends React.Component {

    // constructor( props ) {
    //     super( props );

    //     this.state = {
    //         number: 0
    //     }
    // }

    // componentDidMount() {
    //     //since no API, setinterval
    //     this.myInterval =  setInterval( () => {
    //         this.setState({ number: 0 })
    //     }, 1000)
    // }

    // shouldComponentUpdate( nextProps, nextState ) {
    //     console.warn( nextProps, nextState)
    //     if ( nextState.number === this.state.number ) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // componentWillUnmount() {
    //     clearInterval( this.myInterval );
    // }


    // constructor( props) {
    //     super(props) 

    //     this.state = {
    //         age: ''
    //     }
    // }
    // handleOnclick = () => {
    //     this.setState( {age:28} )
    // }

    // getSnapshotBeforeUpdate( prevProps, prevState ) {
    //     console.warn( 'previousprops:', prevProps );
    //     console.warn( 'previousstate:', prevState );
    //     return 'xyz';
    // }

    // componentDidUpdate( prevProps, prevState, snapshot ) {
    //     console.warn( 'snapshot:', snapshot)
    // }

    constructor( props ) {
        super(props) ;

        console.warn( 'constructor called')
    }


    componentDidMount() {

        console.warn( 'didMount called' )
    }
    render() {
        console.warn( 'render called')
        return(
            <div>
                {/* <button onClick={this.handleOnClick}>Click Over Here</button> */}
            </div>
        )
    }
}

export default Home;