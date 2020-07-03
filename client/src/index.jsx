import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter } from 'react-router-dom';

import Pages from "./pages";

import './style.css'

const engine = new Styletron();

const cache = new InMemoryCache();
const link = new HttpLink({
  // uri: "http://localhost:4000/"
  uri: "https://server-test-produclion.herokuapp.com/"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider
          theme={LightTheme}
          overrides={{ AppContainer: { style: { height: '100vh' } } }}
        >
          <Pages />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
