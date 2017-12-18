import React, { Component } from 'react';

class Component2 extends React.Component {
    render() {
        const {walletKey, myWallet} = this.props;

        return (
            <div>
                <h1>Wallet Key: {walletKey}</h1>
                <h1>I have BitCoins : {myWallet}</h1>
            </div>
        );
    }
}

export default Component2;