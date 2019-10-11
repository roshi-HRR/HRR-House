import React, { Component } from 'react';
import Section1 from './section1/Section1.jsx';
import Section2 from './section2/Section2.jsx';
import Section3 from './section3/Section3.jsx';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        

        return (
            <div>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        )
    }
}




export default App;