import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './index';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('Homepage component renders correctly', () => {
  const component = Enzyme.shallow(<HomePage />);
  expect(component).toMatchSnapshot();
});
