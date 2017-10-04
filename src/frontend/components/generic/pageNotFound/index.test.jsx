import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageNotFound from './index';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('PageNotFound component renders correctly', () => {
  const component = Enzyme.shallow(<PageNotFound />);
  expect(component).toMatchSnapshot();
});
