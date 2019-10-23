import React, { Component } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'react-feather';
import Modal from './Modal.jsx';


class Section3 extends Component {
    constructor(props) {
        super(props);


        this.state = {
            status: 'collapse',
            show: false,
            idx:  Math.floor(Math.random() * 100)
        }
    };

    showModal(e) {
        this.setState({
          show: !this.state.show
        });
      };

    handleExpand(e) {
        this.setState({
            status: 'expand'
        })
    };

    handleHide(e) {
        this.setState({
            status: 'collapse'
        })
    };

    render() {

        return(
            <Container >
                <Paragraph style={{display: this.state.status === 'collapse' ? 'block' : 'none' }}>
                    {this.props.house.length > 0 && this.props.house[this.state.idx].space.slice(0, 350)}...
                </Paragraph>
                <Actual style={{display: this.state.status === 'expand' ? 'block' : 'none' }}>
                    {this.props.house.length > 0 && this.props.house[this.state.idx].space}
                </Actual>
                <Expand onClick={(e) => this.handleExpand(e)} style={{display: this.state.status === 'collapse' ? 'block' : 'none' }}>
                    Read more about the space
                    <Arrow>
                        <ChevronDown size={18} color='#008489'/>
                    </Arrow>
                </Expand>
                <Hide onClick={(e) => this.handleHide(e)} style={{display: this.state.status === 'expand' ? 'block' : 'none' }}>
                    Hide
                    <Arrow>
                        <ChevronUp size={18} color='#008489'/>
                    </Arrow>
                </Hide>

                <Contact onClick={e => this.showModal(e)}>
                    Contact host
                </Contact>



                <Modal onClose={this.showModal.bind(this)} show={this.state.show}> </Modal>

                <Line />

            </Container>
        )
    }
};


const Line = styled.div`
    border-bottom-width: 1px;
    border-bottom-color: #EBEBEB;
    border-bottom-style: solid;
    margin-top: 30px;
`;

const Container = styled.div`
    padding-top: 45px;
    padding-left: 10px;
`;

const Paragraph = styled.span`
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.375em;
    color: #484848;
`;

const Actual = styled(Paragraph)`
    /* display: none; */
`;

const Expand = styled.div`
    color: #008489;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    cursor: pointer;
    user-select: auto;
    text-align: left;
    text-rendering: auto;
    display: block;
    font-size: 16px;
    font-stretch: 100%;
    font-weight: 500;
    margin-top: 15px;
`;

const Hide = styled(Expand)`

`;

const Contact = styled(Expand)`

`;

const Arrow = styled.span`
    border: inline-block;
    vertical-align: -5px;
    margin-left: 6px;
`;

export default Section3;