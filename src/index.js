import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";  // Font Awesome
import App from "./App";

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
