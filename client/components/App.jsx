import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const App = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
    </div>
  </HashRouter>
);

export default App;
