import { render } from "react-dom";
import React from "react";
import App from "./App";
import { MoralisProvider } from "react-moralis";

render(
  <React.StrictMode>
    {/* initialize Moralis */}
    <MoralisProvider
      serverUrl="https://hpz4yq50hr8y.usemoralis.com:2053/server"
      appId="FaLY0U96izeaTHPkmvxHUq87YIejSYU0KMBiHS5M"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
