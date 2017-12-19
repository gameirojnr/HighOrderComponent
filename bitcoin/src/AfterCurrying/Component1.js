import React, { Component } from 'react';

class Component1 extends React.Component {
    render() {
        const {myWallet} = this.props;

        return (
            <div>
                <h1>Component 1</h1>
                <h1>I have BitCoins : {myWallet}</h1>
            </div>
        );
    }
}

export default Component1;