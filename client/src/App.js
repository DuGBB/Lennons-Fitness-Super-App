import React from "react";
import Benchmarks from "./components/Benchmarks";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function App() {
  return (
    <div>
      <header></header>
    </div>
  );
}

export default App;