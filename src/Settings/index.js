import React from "react";
import Welcome from "./Welcomemessage";
import ConfrimButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function() {
  return (
    <Page name="settings">
      <Welcome />
      <ConfrimButton />
      <CoinGrid />
    </Page>
  );
}
