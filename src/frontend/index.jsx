import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/generic/pageNotFound/pageNotFound';
import MainPage from './components/homePage/homePage';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app')); // eslint-disable-line no-undef
