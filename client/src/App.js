import React, { useState } from "react";
import Benchmarks from "./components/Benchmarks";
import ClassSchedule from "./components/ClassSchedule";
import SignUpForm from "./components/SignUp";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import TrainerLogin from "./pages/TrainerLogin";
import Signup from "./pages/Signup";
// import LoginForm from "./components/Login";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import "./App.css";
import "./index.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [classesSelected, setClassesSelected] = useState(false);
  const [personalBestsSelected, setPersonalBestsSelected] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <header>
          <Nav
            classesSelected={classesSelected}
            setClassesSelected={setClassesSelected}
            personalBestsSelected={personalBestsSelected}
            setPersonalBestsSelected={setPersonalBestsSelected}></Nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/trainer-login" component={TrainerLogin} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/class-schedule" component={ClassSchedule} />
          <Route exact path="/benchmarks" component={Benchmarks} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
