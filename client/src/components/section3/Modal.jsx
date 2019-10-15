import React from "react";
import styled from 'styled-components';
import { X } from 'react-feather';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    };

    onClose(e) { 
        this.props.onClose && this.props.onClose(e);
      };

    render() {
        

        if(!this.props.show) {
            return null;
        };

        return (
            <Container>
              <div>{this.props.children}</div>
          
                <Contents>
                    <Ax>
                        <X onClick={e => this.onClose(e)} size={30}/>
                    </Ax>
                    <Fb>Continue with Facebook </Fb>
                    <Google>Continue with Google</Google>

                    <Lines>
                        <Line1></Line1>
                        <Or>or</Or>
                        <Line2></Line2>
                    </Lines>

                    <Email>Sign up with Email</Email>

                    <Login> Already have an Airbnb account?  <Login2>Log in</Login2></Login>
                    
                </Contents>

            </Container>
          );
    }
  }
  
  const Container = styled.div`
    position: fixed;
    width: 568px;
    height: 363px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    align-items: center;
    backface-visibility: hidden;
    background: white;
    border: 1px solid #ccc;
    -webkit-box-shadow: -1px 1px 5000px 900px rgba(0,0,0,0.75);
    /* -moz-box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.75); */
    /* box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.75); */
  `;

  const Contents = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Ax = styled.span`
    display: inline-block;
    margin-top: 25px;
    margin-left: 30px;
    cursor: pointer;
    width: 30px;
  `

  const Fb = styled.div`
    width: 420px;
    height: 23px;
    cursor: pointer !important;
    transition-property: background, border-color, color !important;
    transition-duration: 0.2s !important;
    transition-timing-function: ease-out !important;
    position: relative !important;
    display: inline-block !important;
    text-align: center !important;    
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: normal !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-weight: 800 !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
    color: rgb(255, 255, 255) !important;
    text-decoration: none !important;
    border-radius: 4px !important;
    border-width: 2px !important;
    border-style: solid !important;
    background: rgb(69, 104, 178) !important;
    border-color: transparent !important;
    margin: 20px auto 0 auto;
  `;

  const Google = styled.div`
    width: 420px;
    height: 23px;
    cursor: pointer !important;
    transition-property: background, border-color, color !important;
    transition-duration: 0.2s !important;
    transition-timing-function: ease-out !important;
    position: relative !important;
    display: inline-block !important;
    text-align: center !important;
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: normal !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-weight: 800 !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
    color: rgb(72, 72, 72) !important;
    text-decoration: none !important;
    border-radius: 4px !important;
    border-width: 2px !important;
    border-style: solid !important;
    background: rgb(255, 255, 255) !important;
    border-color: rgb(118, 118, 118) !important;
    margin: 10px auto 0 auto;
  `;

    const Line1 = styled.div`
        border-bottom-width: var(--border-rule-border-width, 1px) !important;
        border-bottom-color: var(--color-divider, #EBEBEB) !important;
        border-bottom-style: solid !important;
        width: 37%;
        margin-bottom: 7px;
        margin-right: 15px;
    `;

    const Line2 = styled.div`
        border-bottom-width: var(--border-rule-border-width, 1px) !important;
        border-bottom-color: var(--color-divider, #EBEBEB) !important;
        border-bottom-style: solid !important;
        width: 37%;
        margin-bottom: 7px;
        margin-left: 15px;
    `;

    const Lines = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const Or = styled.span`
        overflow-wrap: break-word !important;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        line-height: 1.28571em !important;
        color: rgb(118, 118, 118) !important;
        margin: 0px !important;
        padding-top: 30px;
    `

    const Email = styled.div`
        width: 420px;
        height: 23px;
        display: inline-block !important;
        position: relative !important;
        text-align: center !important;
        transition-property: background, border-color, color !important;
        transition-duration: 0.2s !important;
        transition-timing-function: ease-out !important;
        cursor: pointer !important;
        font-size: 16px !important;
        line-height: 24px !important;
        letter-spacing: normal !important;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        font-weight: 800 !important;
        padding-left: 22px !important;
        padding-right: 22px !important;
        min-width: 71.1935px !important;
        box-shadow: none !important;
        color: rgb(255, 255, 255) !important;
        text-decoration: none !important;
        border-radius: 4px !important;
        border-width: 2px !important;
        border-style: solid !important;
        background: rgb(255, 90, 95) !important;
        border-color: transparent !important;
        margin: 20px auto 0 auto;
    `;

    const Login = styled.div`
        display: inline-block;
        margin: 15px 0 0 50px;
        word-wrap: break-word !important;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
        font-size: 16px !important;
        font-weight: 300 !important;
        line-height: 1.375em !important;
        color: #484848 !important;
    `;

    const Login2 = styled.div`
        margin-left: 6px;
        display: inline-block;
        word-wrap: break-word !important;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
        font-size: 16px !important;
        font-weight: 300 !important;
        line-height: 1.375em !important;
        color: #484848 !important;
        color: var(--color-text-link, #008489) !important;
        font-family: var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
        text-decoration: var(--font-link-text-decoration, none) !important;
        font-weight: 450 !important;
    `;