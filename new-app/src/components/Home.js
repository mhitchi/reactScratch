import React from 'react';
class Home extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        //since no API, setinterval
        this.myInterval =  setInterval( () => {
            this.setState({ number: 0 })
        })
    }

    componentWillUnmount() {
        clearInterval( this.myInterval );
    }

    render() {
        return(
            <div>
                This is a component.
            </div>
        )
    }
}

export default Home;