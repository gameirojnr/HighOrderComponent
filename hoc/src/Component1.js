import React from 'react';
import API from './API';

class Component1 extends React.Component {   
    handleClick = () => {
        console.log('Component1')
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Component 1 </h1>
            </div>
        );
    }
}

export default Component1;