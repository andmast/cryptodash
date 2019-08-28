import React, { Component } from "react";
import "./App.css";
import Welcomemessage from "./Welcomemessage";
import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcomemessage />
      </AppLayout>
    );
  }
}

export default App;
