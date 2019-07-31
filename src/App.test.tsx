import React from 'react';
import { shallow } from 'enzyme';
import * as renderer from "react-test-renderer";
import App from './App';

describe('App Component', () => {
  it('renders snapshots, too', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper);
    // expect(wrapper.find('.App')).toBeDefined();

    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
