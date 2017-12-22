import React from 'react';
import PropTypes from 'prop-types';

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

Component1.defaultProps = {
    handleTracker: () => {},
};

Component1.propTypes = {
    handleTracker: PropTypes.func,
};

export default Component1;