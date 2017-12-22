import React from 'react';
import PropTypes from 'prop-types';

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

Component2.defaultProps = {
    handleTracker: () => { },
};

Component2.propTypes = {
    handleTracker: PropTypes.func,
};

export default Component2;