import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('Root App component renders correctly', () => {
  const component = Enzyme.shallow(<App />);
  expect(component).toMatchSnapshot();
});
