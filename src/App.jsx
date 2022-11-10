import React, { useEffect, useState } from "react";
import "./App.css";
import { Spinner, Container } from "react-bootstrap";
import { FhirResource, fhirVersions } from "fhir-react";

// Import optional styles for fhir-react component display
import "fhir-react/build/style.css";
import "fhir-react/build/bootstrap-reboot.min.css";

export default function App(props) {
  const client = props.client;
  const [practitioner, setPractitioner] = useState(null);
  const [patient, setPatient] = useState(null);
  const [observation, setObservation] = useState(null);

  useEffect(() => {
    // any FHIR search will return a Bundle resource containing the results (even a result count of 1)

    // get practitioner (person that launched into Pearl from Epic)
    client.user.read().then((user) => setPractitioner(user));

    // get conextualized patient (included in launch by adding scope launch/patient) - ref: https://build.fhir.org/ig/HL7/smart-app-launch/scopes-and-launch-context.html
    //client.patient.read().then((patient) => setPatient(patient)); // client.patient.read() same as client.request('Patient/{id}') - ref: http://docs.smarthealthit.org/client-js/client
    client
      .request(`Patient/${client.patient?.id}`)
      .then((patient) => setPatient(patient));

    // get multiple labs in one call with comma separated list on 'code' param
    // Pearl will most likely only use LOINC codes, if another system is used (i.e. a non-LOINC coding system), format is system|code - i.e. http://loinc.org|2349-9
    client
      .request(
        //`Observation?patient=${client.patient?.id}&code=http://loinc.org|2349-9,http://loinc.org|2965-2` // equivalent to below with LOINC system identifier (http://loinc.org)
        `Observation?patient=${client.patient?.id}&code=2349-9,2965-2` // equivalent to above without LOINC system identifier (http://loinc.org)
      )
      .then((observation) => setObservation(observation));

    // get all labs for a patient (don't do this, possible huge payload and the Epic gods will hunt you for killing their servers!!)
    // client
    //  .request(
    //    `Observation?patient=${client.patient?.id}&category=laboratory` // all lab results
    //  )
    //  .then((observation) => setObservation(observation));
  }, [client]);

  return (
    <div id="app">
      <Container>
        {practitioner ? (
          <FhirResource fhirResource={practitioner} fhirVersion={fhirVersions.R4} />
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
      <Container>
        {patient ? (
          <FhirResource fhirResource={patient} fhirVersion={fhirVersions.R4} />
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
      <Container>
        {observation ? (
          <FhirResource
            fhirResource={observation}
            fhirVersion={fhirVersions.R4}
          />
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
    </div>
  );
}
