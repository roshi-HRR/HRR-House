import React, { Component } from 'react';
import styled from 'styled-components';

class Section1 extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let randomIdx = Math.floor(Math.random() * 100)
        return(
            <div>
                <Container >
                    <Left >
                        <Title>
                            {this.props.house.length > 0 && this.props.house[randomIdx].title}
                        </Title>
                        <Location>
                            {this.props.house.length > 0 && this.props.house[randomIdx].location}
                        </Location>
                    </ Left>
                    <Right >
                        <Pic src={this.props.house.length > 0 && this.props.house[randomIdx].imageURL} ></Pic>
                        {/* <Pic src='http://lorempixel.com/640/480/people/'></Pic> */}
                        <Host >{this.props.house.length > 0 && this.props.house[randomIdx].hostName}</Host>
                    </ Right>


                </Container>
                <Line2 />
            </div>
        )
    }
}

const Line = styled.div`
    border-bottom-width: 1px;
    border-bottom-color: #EBEBEB;
    border-bottom-style: solid;
`;

const Line2 = styled(Line)`
    margin-top: 17px;
`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
`;

const Left = styled.div`
    display: block;
    width: 78%;
    height: 100%;
`;

const Right = styled.div`
    width: 22%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.125em;
    color: #484848;
    padding-top: 6px;
    padding-bottom: 6px;
    display: block;
    margin-bottom: 18px;
`;

const Location = styled.div`
    font-size: 14px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375em;
    color: #484848;
`;

const Pic = styled.img`
        border-radius: 50%;
        border-width: 2px;
        border-color: #ffffff;
        width: 60px;
        height: 60px;
        margin-top: 10px;
`;

const Host = styled.div`
    margin-top: 6px;
    word-wrap: break-word;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2857142857142858em;
    color: #767676;
`;


export default Section1;