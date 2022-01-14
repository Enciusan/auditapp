import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MUIDataTable from "mui-datatables";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { ThemeProvider, createTheme } from '@material-ui/core';


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>

  );
}

export default App;
