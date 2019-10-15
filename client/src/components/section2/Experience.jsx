import React, {Component} from 'react';
import styled from 'styled-components';
import { Key } from 'react-feather';

class Experience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let randomIdx = Math.floor(Math.random() * 100)
        return(
            <Container >
                <Key size={13} color='#484848'/>
                <Title>
                {this.props.house.length > 0 && this.props.house[randomIdx].check.experience}
                </Title>
                <Descrip >
                    <span>{this.props.house.length > 0 && this.props.house[randomIdx].check.experienceDescrip.slice(0, 35)
}</span>                  
                </Descrip>
            </Container>
        )
    }
};

const Container = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.div`
    margin-left: 10px;
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: inline-block;
`;

const Descrip = styled.div`
    width: 50%;
    margin-left: 18px;
    margin-top: 5px;
`;

export default Experience;