import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;
const ControllerButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControllerButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControllerButtonElem
          active={page === name}
          onClick={() => setPage(name)}
        >
          {toProperCase(name)}
        </ControllerButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControllerButton active name="dashboard" />
      <ControllerButton name="settings" />
    </Bar>
  );
}
