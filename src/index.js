import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';


import App from './App.js';

ReactDOM.render(<div>
  <App />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
