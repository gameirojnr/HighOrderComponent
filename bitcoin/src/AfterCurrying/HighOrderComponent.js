import React, { Component } from 'react';
import API from '../DataSource';

const myfirstHighOrderComponent = function MyHighOrderComponent (Component) {
    return class extends React.Component {
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
            return <Component {...this.state} {...this.props}/>
        }
    }
}

export default myfirstHighOrderComponent;