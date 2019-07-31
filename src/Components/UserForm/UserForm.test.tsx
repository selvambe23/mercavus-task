import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from "react-test-renderer";
import UserForm from './UserForm';

describe('UserForm Component', () => {
  it('renders snapshots, too', () => {
    const userAddFunc = jest.fn();
    const wrapper = shallow(<UserForm userAddFunc={userAddFunc} />);
    expect(wrapper.find('.userAddform')).toBeDefined();

    const tree = renderer
      .create(<UserForm userAddFunc={userAddFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});