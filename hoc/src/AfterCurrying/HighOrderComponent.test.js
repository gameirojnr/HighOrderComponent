import { shallow } from 'enzyme';
import React from 'react';
import HighOrderComponent from './HighOrderComponent';

jest.mock('../API', () => ({
  sendTracker: (id, content) => new Promise((resolve, reject) => resolve(`Success sent tracker with id ${id}`))
}))

class MockComponent extends React.Component {
    render(){
        return <h1>MockComponent</h1>
    }
}

describe('<HighOrderComponent />', () => {
    it('renders correctly', () => {
        const WrappedComponent = HighOrderComponent(MockComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper).toMatchSnapshot();
    });

    it('injects the prop handleTracker', () => {
        const WrappedComponent = HighOrderComponent(MockComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper.props().handleTracker).toBeDefined();
    });
});