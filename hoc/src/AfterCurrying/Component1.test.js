import Component1 from './Component1';
import React from 'react';
import { shallow } from 'enzyme';

//handleTracker

describe('<Component1 />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Component1 />);
        expect(wrapper).toMatchSnapshot();
    });

    it('handles click correctly', () => {
        const funcExample = jest.fn();
        const wrapper = shallow(<Component1 handleTracker={funcExample}/>);

        wrapper.find('h1').simulate('click');
        expect(funcExample.mock.calls.length).toBe(1);
    });
});