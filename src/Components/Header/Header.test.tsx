import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from "react-test-renderer";
import Header from './Header';

describe('Header Component', () => {
  it('renders snapshots, too', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.header')).toBeDefined();

    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});