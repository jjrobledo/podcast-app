import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PodcastContextProvider } from "./context/Podcasts.context";
import { AuthContextProvider } from "./context/UserAuth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PodcastContextProvider>
        <App />
      </PodcastContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
