import React, { Component } from "react";
import "./App.css";
import Welcomemessage from "./Welcomemessage";
import styled, { css } from "styled-components";

const Mybutton = styled.button`
  color: green;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
    `}
`;

const TomatoButton = styled(Mybutton)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcomemessage />
        <Mybutton> Hello </Mybutton>
        <Mybutton primary> Hello </Mybutton>
        <TomatoButton> Hello </TomatoButton>
      </div>
    );
  }
}

export default App;
