import React from 'react';
import './App.css';
import TransactionsPage from './pages/TransactionsPage';
import Header from './sections/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
        <Router>
        <Header />
        <Switch>
          <Route path="/new">
            <div>Ljuta dobra</div>
          </Route>
          <Route path="/transactions">
            <TransactionsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
