import React from "react";
import Benchmarks from "./components/Benchmarks";
import ClassSchedule from "./components/ClassSchedule";
import SignupForm from "./components/SignUp";


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

import Home from "./pages/Home";
import './App.css';
import './index.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  
  return (
    <ApolloProvider>
    <section>
    <Home/>
    <div>
      <header>
        <LoginForm />
      </header>
      <SignupForm />
    </div>
    <Footer />
    </section>
    </ApolloProvider>

  );
};

export default App;
