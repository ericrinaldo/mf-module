import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <a href="../storybook/">Storybook</a>
    <br />
    <a href="remoteEntry.js">remoteEntry.js</a>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
