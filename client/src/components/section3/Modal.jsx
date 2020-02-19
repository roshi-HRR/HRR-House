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
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 800;
    padding-left: 22px;
    padding-right: 22px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    background: rgb(69, 104, 178);
    border-color: transparent;
    margin: 20px auto 0 auto;
  `;

  const Google = styled.div`
    width: 420px;
    height: 23px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 800;
    padding-left: 22px;
    padding-right: 22px;
    color: rgb(72, 72, 72);
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    background: rgb(255, 255, 255);
    border-color: rgb(118, 118, 118);
    margin: 10px auto 0 auto;
  `;

    const Line1 = styled.div`
        border-bottom-width: 1px;
        border-bottom-color: #EBEBEB;
        border-bottom-style: solid;
        width: 37%;
        margin-bottom: 7px;
        margin-right: 15px;
    `;

    const Line2 = styled.div`
        border-bottom-width: 1px;
        border-bottom-color: #EBEBEB;
        border-bottom-style: solid;
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
        overflow-wrap: break-word;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.28571em;
        color: rgb(118, 118, 118);
        margin: 0px;
        padding-top: 30px;
    `

    const Email = styled.div`
        width: 420px;
        height: 23px;
        text-align: center;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: normal;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: 800;
        padding-left: 22px;
        padding-right: 22px;
        min-width: 71.1935px;
        box-shadow: none;
        color: rgb(255, 255, 255);
        border-radius: 4px;
        border-width: 2px;
        border-style: solid;
        background: rgb(255, 90, 95);
        border-color: transparent;
        margin: 20px auto 0 auto;
    `;

    const Login = styled.div`
        display: inline-block;
        margin: 15px 0 0 50px;
        word-wrap: break-word;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.375em;
        color: #484848;
    `;

    const Login2 = styled.div`
        margin-left: 6px;
        display: inline-block;
        word-wrap: break-word;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.375em;
        color: #484848;
        color: #008489;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
        text-decoration: none;
        font-weight: 450;
    `;