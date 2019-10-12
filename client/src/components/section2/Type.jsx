import React, {Component} from 'react';
import styled from 'styled-components';
import { Home } from 'react-feather';

class Type extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let randomIdx = Math.floor(Math.random() * 100)
        return(
            <Container>
                <Home size={13} color='#484848' />
                <Title>
                    {this.props.house.length > 0 && this.props.house[randomIdx].size.home}
                </Title>
                <Rooms >
                    <span>{this.props.house.length > 0 && this.props.house[randomIdx].rooms.guests} guest(s)</span>
                    <span>{this.props.house.length > 0 && this.props.house[randomIdx].rooms.bedroom} bedroom</span>
                    <span>{this.props.house.length > 0 && this.props.house[randomIdx].rooms.beds} bed(s)</span>
                    <span>{this.props.house.length > 0 && this.props.house[randomIdx].rooms.bath} bath</span>
                </Rooms>
            </Container>
        )
    }
}

const Container = styled.div`
    margin-bottom: 25px;
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

const Rooms = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: 10px;
    margin-top: 5px;
`;

export default Type;