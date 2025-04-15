import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });
  it("should render initial layout", () => {
    const component = shallow(<MyComponent />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
