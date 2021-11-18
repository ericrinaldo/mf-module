import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from './components';
import './index.css';


const App = () => (
  <div>
    <Button>Testing</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
