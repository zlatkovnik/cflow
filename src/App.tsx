import React from 'react';
import './App.css';
import TransactionsPage from './pages/TransactionsPage';
import Header from './features/sections/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateTransactionPage from './pages/CreateTransactionPage';

function App() {
  return (
    <React.Fragment>
        <Router>
        <Header />
        <Switch>
          <Route path="/create">
            <CreateTransactionPage />
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
