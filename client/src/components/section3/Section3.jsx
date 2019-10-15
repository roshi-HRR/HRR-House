import React, { Component } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'react-feather';
import Modal from './Modal.jsx';


class Section3 extends Component {
    constructor(props) {
        super(props);


        this.state = {
            status: 'collapse',
            show: false
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

        let randomIdx = Math.floor(Math.random() * 100);
        
        return(
            <Container >
                <Paragraph style={{display: this.state.status === 'collapse' ? 'block' : 'none' }}>
                    {this.props.house.length > 0 && this.props.house[randomIdx].space.slice(0, 350)}...
                </Paragraph>
                <Actual style={{display: this.state.status === 'expand' ? 'block' : 'none' }}>
                    {this.props.house.length > 0 && this.props.house[randomIdx].space}
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
    border-bottom-width: var(--border-rule-border-width, 1px) !important;
    border-bottom-color: var(--color-divider, #EBEBEB) !important;
    border-bottom-style: solid !important;
    margin-top: 30px;
`;

const Container = styled.div`
    padding-top: 45px;
    padding-left: 10px;
`;

const Paragraph = styled.span`
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px !important;
    font-weight: 300 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
`;

const Actual = styled(Paragraph)`
    /* display: none; */
`;

const Expand = styled.div`
    color: var(--color-text-link, #008489) !important;
    font-family: var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
    cursor: pointer !important;
    user-select: auto !important;
    text-align: left !important;
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