import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { QuoteContextProvider } from "./context/QuoteContext";

const root = createRoot(document.getElementById('root'));

root.render(
    <QuoteContextProvider>
        <App/>
    </QuoteContextProvider>
);