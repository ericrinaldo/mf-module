import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <a href="../../../storybook/index.html">Storybook</a>
    <br />
    <a href="remoteEntry.js">remoteEntry.js</a>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
