import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import { CarouselData } from "./Components/Hero/CarouselData"
import Carousel from "./Components/Hero/Carousel"
import About from "./Components/Navbar/About"
import Management from "./Components/Navbar/Management"

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel slides={CarouselData} />
      <About />
      <Management />
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
        </Route>
        <Route exact path="/contact">
        </Route>
        <Route exact path="/profile">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
