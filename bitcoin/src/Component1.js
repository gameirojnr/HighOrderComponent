import React, { Component } from 'react';
import API from './DataSource';

class Component1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myWallet: 0,
        };
    }
    
    render() {
        const {myWallet} = this.state;
        
        return (
            <div>
                <h1>Component 1 </h1>
                <h1>I have BitCoins : {myWallet}</h1>
            </div>
        );
    }
}

export default Component1;