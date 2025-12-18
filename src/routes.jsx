import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "scenes/Home/Home"
import Question from "scenes/Question/Question"
import Header from "components/Header/Header";

export default function BasicExample() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/question?" element={<Question />} />
      </Routes>
    </Router>
  );
}
//<Route path="/about" component={About} />