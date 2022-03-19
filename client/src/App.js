import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import LoginForm from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <LoginForm />
      </header>
      <Footer />
    </div>
  );
}

export default App;
