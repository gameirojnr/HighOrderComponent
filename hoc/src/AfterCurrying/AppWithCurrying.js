import React, { Component } from 'react';

import Component1 from './Component1';
import Component2 from './Component2';

import withHighOrderComponent from './HighOrderComponent';

const Component1WithWrapper = withHighOrderComponent(Component1);
const Component2WithWrapper = withHighOrderComponent(Component2);

class App2 extends Component {
  render() {
    
    return (
        <div>
            <header>
                <h1>Forever Plugin ❤</h1>
            </header>
            <hr/>
            <Component1WithWrapper />
            <Component2WithWrapper />
        </div>
    );
  }
}

export default App2;
