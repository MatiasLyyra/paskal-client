import React from 'react';
import LineCount from './LineCount';
import {shallow} from 'enzyme';

it('renders renders 0 lines correctly', () => {
  const wrapper = shallow(<LineCount lines={0}></LineCount>);
  expect(wrapper).toMatchSnapshot();
});
it('renders renders n lines correctly', () => {
  const wrapper = shallow(<LineCount lines={12}></LineCount>);
  expect(wrapper).toMatchSnapshot();
});
