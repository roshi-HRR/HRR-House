import React, { Component } from 'react';
import styled from 'styled-components';

class Section1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            location: '',
            url: '',
            host: ''
        }
    }

    componentDidMount() {
        let randomIdx = Math.floor(Math.random() * 100)
        
        fetch('/house')
            .then((res) => res.json())
            .then(res => {
                console.log(res[randomIdx])
                this.setState({
                    title: res[randomIdx].title,
                    location: res[randomIdx].location,
                    url: res[randomIdx].imageURL,
                    host: res[randomIdx].hostName
                })
            })
    }

    render() {
        return(
            <Container >
                <Left >
                    <Title>
                         {this.state.title}
                    </Title>
                    <Location>
                         {this.state.location}
                    </Location>
                </ Left>
                <Right >
                    <Pic src={this.state.url} ></Pic>
                    <Host >{this.state.host}</Host>
                </ Right>
            </Container>
        )
    }
}

const Container = styled.div`
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