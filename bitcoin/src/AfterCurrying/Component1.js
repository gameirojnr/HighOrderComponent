import React from 'react';

class Component1 extends React.Component {

    handleClick = () => {
        this.props.handleTracker('Component1', {})
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Component 1</h1>
            </div>
        );
    }
}

export default Component1;