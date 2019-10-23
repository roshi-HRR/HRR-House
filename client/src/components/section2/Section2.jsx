import React, { Component } from 'react';
import Location from './Location.jsx';
import Experience from './Experience.jsx';
import Type from './Type.jsx';
import styled from 'styled-components';

class Section2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container>

                <Type house={this.props.house}/>
                <Location house={this.props.house}/>
                <Experience house={this.props.house}/>
                <Line />

            </Container>
        )
    }
};

const Line = styled.div`
    border-bottom-width: 1px;
    border-bottom-color: #EBEBEB;
    border-bottom-style: solid;
`;

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export default Section2;