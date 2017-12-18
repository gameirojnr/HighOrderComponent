import React, { Component } from 'react';
import API from './DataSource';

class Component2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myWallet: '',
        };
    }

    componentDidMount() {        
        API.getBitcoins.then(
            (response) => {
                this.setState({
                    myWallet: response.bitcoins,
                });
            },
            (error) => {
                console.error(error);
            }
        );
    }

    render() {
        const {walletKey} = this.props;
        const {myWallet} = this.state;

        return (
            <div>
                <h1>Wallet Key: {walletKey}</h1>
                <h1>I have BitCoins : {myWallet}</h1>
            </div>
        );
    }
}

export default Component2;