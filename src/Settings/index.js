import React from "react";
import Welcome from "./Welcomemessage";
import ConfrimButton from "./ConfirmButton";
import Page from "../Shared/Page";

export default function() {
  return (
    <Page name="settings">
      <Welcome />
      <ConfrimButton />
    </Page>
  );
}
