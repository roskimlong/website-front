import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import NotFound from '../src/components/pageNotFound';

function App() {
  return (
    <main>
      <Switch>
          <Route path="/home" component={Home} exact />
          <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
