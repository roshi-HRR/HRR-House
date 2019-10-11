import React, { Component } from 'react';
import styled from 'styled-components';
import Section1 from './section1/Section1.jsx';
import Section2 from './section2/Section2.jsx';
import Section3 from './section3/Section3.jsx';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        

        return (
            <div style={{height: '100%'}}>

                <Summary>
                    <Section1 />
                </Summary>

                <Spec>
                    <Section2 />
                </Spec>

                <Rundown>
                    <Section3 />
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
    /* background-color: grey; */
`; 

const Spec = styled(Summary)`
    height: 210.955px;
    background-color: brown;
`;

const Rundown = styled(Summary)`
    height: 287.604px;
    background-color: purple;
`;

export default App;