import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './AfterCurrying/AppWithCurrying';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
