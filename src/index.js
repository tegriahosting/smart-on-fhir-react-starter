import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import FHIR from "fhirclient";

const rootElement = document.getElementById("root");

const smartLaunch = () => {
  // Authorize application - docs: http://docs.smarthealthit.org/client-js/api
  FHIR.oauth2
    .init({
      clientId: "f683935f-c5bd-48c5-bba7-2e6114677928", // Assigned Epic client id (will be different values for PRD vs Non-PRD)
      scope:
        "launch launch/encounter launch/patient patient/*.rs practitioner/*.rs fhirUser openid", // scopes explained - https://build.fhir.org/ig/HL7/smart-app-launch/scopes-and-launch-context.html
      redirectUri: "http://localhost:3000", // must match redirect uri in EHR configuration
    })
    .then((client) => {
      ReactDOM.render(<App client={client} />, rootElement); // run App in SMART context (vs Okta context)
    });
};

smartLaunch();
