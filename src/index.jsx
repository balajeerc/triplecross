import React from 'react';
import {render} from 'react-dom';

const App = () => (
  <div>
    <h1>Hello, from React!</h1>
  </div>
);

render(<App />, document.getElementById('app')); // eslint-disable-line no-undef
