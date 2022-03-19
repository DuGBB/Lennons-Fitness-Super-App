import React from "react";
import Benchmarks from "./components/Benchmarks";
import ClassSchedule from "./components/ClassSchedule";
import SignUpForm from "./components/SignUp";

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
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default App;
