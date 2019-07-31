import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('renders snapshots, too', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.header')).toBeDefined();
  })
});