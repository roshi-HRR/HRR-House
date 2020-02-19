import React, {Component} from 'react';
import styled from 'styled-components';
import { MapPin } from 'react-feather';

class Location extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <Container >
                <MapPin size={13} color='#484848'/>
                <Title >
                    {typeof this.props.house === 'object' && this.props.house.place && this.props.house.place.location}
                </Title>
                <Descrip >
                    <span>{typeof this.props.house === 'object' && this.props.house.place && this.props.house.place.locationDescrip.slice(0, 35)}</span>
                </Descrip>
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

const Descrip = styled.div`
    width: 50%;
    margin-left: 18px;
    margin-top: 5px;
`;

export default Location;