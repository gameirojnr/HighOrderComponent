import Component2 from './Component1';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Component2 />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Component2 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles click correctly', () => {
    const funcExample = jest.fn();
    const wrapper = shallow(<Component2 handleTracker={funcExample} />);

    wrapper.find('h1').simulate('click');
    expect(funcExample.mock.calls.length).toBe(1);
  });
});