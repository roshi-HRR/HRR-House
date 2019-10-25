import React, { Component } from 'react';
import styled from 'styled-components';
import Section1 from './section1/Section1.jsx';
import Section2 from './section2/Section2.jsx';
import Section3 from './section3/Section3.jsx';
const fetch = require("node-fetch");

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            house: []
        }

    }

    componentDidMount() {

        fetch('/house')
        .then((res) => res.json())
        .then(res => this.setState({house: res}))

    }



    render() {

        return (
            <div style={{height: '100%'}}>
                <Summary>
                    <Section1 house={this.state.house}/>
                </Summary>

                <Spec>
                    <Section2 house={this.state.house}/>
                </Spec>

                <Rundown>
                    <Section3 Section2 house={this.state.house}/>
                </Rundown>

            </div>
        )
    }
}

const Summary = styled.div`
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    box-sizing: border-box;
    width: 594px;
    height: 141px;
`;

const Spec = styled(Summary)`
    height: 210.955px;
`;

const Rundown = styled(Summary)`
    height: 287.604px;
`;

export default App;