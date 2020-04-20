import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobsList";
import localEsMessages from './locales/es.json'
import localEnMessages from './locales/en.json'

let translationTable = navigator.language.startsWith("es") ? localEsMessages : localEnMessages
console.log(navigator.language)

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={translationTable}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);