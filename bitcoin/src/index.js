import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './AfterCurrying/AppWithCurrying';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App2 />, document.getElementById('root'));
//ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();