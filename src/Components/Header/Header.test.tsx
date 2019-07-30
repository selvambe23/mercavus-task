import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header Should be rendered one time", () => {
    it("should render header component", () => {
      const wrapper = shallow(<Header />);
    });
});