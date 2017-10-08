import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import PageNotFound from '../../components/generic/pageNotFound/index';
import MainPage from '../../components/homePage/index';
import store, { history } from '../../store';

const navigateBackToHome = () => {
  store.dispatch(push('/'));
};

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route render={() => <PageNotFound goBack={navigateBackToHome} />} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
