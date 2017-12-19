import React, { Component } from 'react';

import Component1 from './Component1';

class App extends Component {
  render() {
    return (
        <div>
            <header>
                <h1>Forever Plugin ❤</h1>
            </header>
            <hr/>
            <Component1/>
        </div>
    );
  }
}

export default App;
