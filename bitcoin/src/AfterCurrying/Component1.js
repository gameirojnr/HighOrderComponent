import React, { Component } from 'react';

class Component1 extends React.Component {
    render() {
        const {title, myWallet} = this.props;

        return (
            <div>
                <h1>Wallet Key: {title}</h1>
                <h1>I have BitCoins : {myWallet}</h1>
            </div>
        );
    }
}

export default Component1;