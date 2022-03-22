import React from "react";
// import Benchmarks from "./components/Benchmarks";
// import ClassSchedule from "./components/ClassSchedule";
import SignUpForm from "./components/SignUp";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

import LoginForm from "./components/Login";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// import Home from "./pages/Home";
import "./App.css";
import "./index.css";

function App() {
  return (
    <section>
      {/* <Home /> */}
      <div>
        <header>
          <Nav />
          <LoginForm />
        </header>

        <header></header>
        <SignUpForm></SignUpForm>
        <Footer />
      </div>
    </section>
  );
}

export default App;
