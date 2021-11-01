import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";
import { mobile } from "./responsive";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ITA from "./pages/ITA";
import Projects from "./pages/Projects";
import ReadyNotification from "./components/ReadyNotification";
import styled from "styled-components";
export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <ReadyNotification />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/ita" component={ITA} />
        <Route path="*" component={ITA} />
      </Switch>
    </Router>
  );
}
