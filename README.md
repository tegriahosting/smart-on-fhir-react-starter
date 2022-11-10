# Getting Started SMART on FHIR apps
This starter-kit application is a simple SMART on FHIR App.
https://github.com/microsoft/smart-on-fhir-app-starter-kit

* Fetches Practitioner, Patient and Observation FHIR data
* Displays Patient information using fhir-react library (https://www.npmjs.com/package/fhir-react)

# Running this app locally (quick)
1. ``` yarn install ```
2. ``` yarn start ```
3. [Goto SMART Launcher](https://launch.smarthealthit.org/)
4. Leave everything as default, at the bottom of the form change the launch url to ```http://localhost:3000```
5. Click Launch

# Running this app locally with Epic FHIR Sandbox
1. ``` yarn install ```
2. ``` yarn start ```
3. Create an account on Epic FHIR - https://fhir.epic.com
4. Create an app in Epic FHIR for testing - https://fhir.epic.com/Developer/Apps
   - Name your app
   - Set **Application Audience** to **Clinicians or Administrative Users**
   - Add these APIs to **Selected** column
     - Observation.Read (Labs) (R4)
     - Observation.Search (Labs) (R4)
     - Patient.Read (R4)
     - Patient.Search (R4)
     - Practitioner.Read (R4)
     - Practitioner.Search (R4)
   - **Save** the app and open it again to continue to the settings below...
   - Copy the **Non-Production Client ID** to the oauth init *clientId* param in index.js
   - Add ```http://localhost:3000``` to the list of Redirect URIs
   - Set **SMART on FHIR Version** to **R4**
   - Click **Save & Ready for Sandbox**
     - Changes may not take effect immediately, delays range from minutes to hours (Epic's discrection). You will see auth errors until the changes are propagated.
5. Go to https://fhir.epic.com/Documentation?docId=launching
6. Click the **Try It** button
   - *Choose an app to test with*: select the app you created above
   - *Select a patient*: choose any patient
   - *Enter launch URL to receive the request to your app*: ```http://localhost:3000```
   - Click **Launch** - this should open a new tab displaying Epic FHIR test data

# Running this app locally (EMR/Scenario Specific App Integration)

## Setup Identitiy Provider
[This guide](https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/use-smart-on-fhir-proxy) walks through the setup process for a SMART on FHIR app using the Azure SMART Proxy for Azure Active Directory.

Not covered: Running with an identity provider other than Azure Activer Directory.

## Run the app
1. Change client ID in index.js to the client ID generated in the above steps.
2. ``` yarn start```
3. Follow [these steps](https://techcommunity.microsoft.com/t5/healthcare-and-life-sciences/launching-a-smart-app-demystified/ba-p/2779729) to create a SMART Launcher from your EMR: 
4. Click on the link



# What's Next?
Think about what this app does.  It has all the boiler plate you need to access and modify a FHIR resrouce.
If you've ever had a piece of functionality you've wanted to add to an EMR you can code it in a SMART on FHIR app- using all the web dev tech you already know. Then just add that app to your EMR.

An example use of this is the Chestist demo app that packages ML assisted image analysis.


#References:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Quickstart on deploying a SMART app in Azure](https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/use-smart-on-fhir-proxy)

[SMARTHealth's Quickstart](https://docs.smarthealthit.org/)

[Cerner's Quickstart](https://engineering.cerner.com/smart-on-fhir-tutorial/)


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
