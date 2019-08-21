import React, { Component } from "react";
import "./App.css";
import Welcomemessage from "./Welcomemessage";
import styled from "styled-components";

const Mybutton = styled.div`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcomemessage />
        <Mybutton> Hello </Mybutton>
      </div>
    );
  }
}

export default App;
