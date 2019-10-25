import React, {Component} from 'react';
import styled from 'styled-components';
import { Home } from 'react-feather';

class Type extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.house)
        return(
            <Container>
                <Home size={13} color='#484848' />
                <Title>
                    {typeof this.props.house === 'object' && this.props.house.size && this.props.house.size.home}
                </Title>
                <Rooms >
                    <span>{typeof this.props.house === 'object' && this.props.house.rooms && this.props.house.rooms.guests} guest(s)</span>
                    <span>{typeof this.props.house === 'object' && this.props.house.rooms && this.props.house.rooms.bedroom} bedroom</span>
                    <span>{typeof this.props.house === 'object' && this.props.house.rooms && this.props.house.rooms.beds} bed(s)</span>
                    <span>{typeof this.props.house === 'object' && this.props.house.rooms && this.props.house.rooms.bath} bath</span>
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
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.375em;
    color: #484848;
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