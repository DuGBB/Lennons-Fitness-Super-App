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

import LoginForm from "./components/Login";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import './App.css';
import './index.css';


function App() {
  return (
    
    <Home/>

    <div>

      <header>
        <LoginForm />
      </header>
      <Footer />

      
      <SignUpForm></SignUpForm>

    </div>

  );
};

export default App;
