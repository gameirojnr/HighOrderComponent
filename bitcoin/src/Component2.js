import React from 'react';
import API from './API';

class Component1 extends React.Component {    
    sendTracker = (id, content) => {
        API.sendTracker(id, content).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.error(error);
            }
        );
    }

    handleClick = () => {
        this.sendTracker('Component2', {})
    }

    render() {       
        return (
            <div>
                <h1 onClick={this.handleClick}>Component 2 </h1>
            </div>
        );
    }
}

export default Component1;