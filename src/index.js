import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './Products';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Products />, document.getElementById('container'));

serviceWorker.unregister();