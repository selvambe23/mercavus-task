import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from "react-test-renderer";
import HobbyForm from './HobbyForm';

describe('HobbyForm Component', () => {
  it('renders snapshots, too', () => {
    const addHobbiesFunc = jest.fn();
    const wrapper = shallow(<HobbyForm addHobbiesFunc={addHobbiesFunc} />);
    expect(wrapper.find('.userHobbyAddform')).toBeDefined();

    const tree = renderer
      .create(<HobbyForm addHobbiesFunc={addHobbiesFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});