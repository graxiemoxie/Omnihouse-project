import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./pages/Home/Home"));
const SecondPage = lazy(() => import("./pages/SecondPage/SecondPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/second-page" component={SecondPage} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
