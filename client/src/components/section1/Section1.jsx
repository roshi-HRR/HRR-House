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
    border-bottom-width: var(--border-rule-border-width, 1px) !important;
    border-bottom-color: var(--color-divider, #EBEBEB) !important;
    border-bottom-style: solid !important;
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
    /* background-color: yellowgreen; */
    display: block;
    width: 78%;
    height: 100%;
`;

const Right = styled.div`
    /* background-color: orangered; */
    width: 22%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 32px !important;
    font-weight: 700 !important;
    line-height: 1.125em !important;
    color: #484848 !important;
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    display: block;
    margin-bottom: 18px;
`;

const Location = styled.div`
    font-size: 14px;
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
`;

const Pic = styled.img`
        border-radius: var(--border-profile-photo-border-radius, 50%) !important;
        border-width: var(--border-profile-photo-border-width, 2px) !important;
        border-color: var(--color-white, #ffffff) !important;
        width: 60px;
        height: 60px;
        margin-top: 10px;
`;

const Host = styled.div`
    margin-top: 6px;
    word-wrap: break-word !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1.2857142857142858em !important;
    color: #767676 !important;
`;


export default Section1;