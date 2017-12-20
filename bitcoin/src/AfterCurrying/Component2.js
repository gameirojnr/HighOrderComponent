import React from 'react';

class Component2 extends React.Component {
    
    handleClick = () => {
        this.props.handleTracker('Component2', {})
    }
    
    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Component 2</h1>
            </div>
        );
    }
}

export default Component2;