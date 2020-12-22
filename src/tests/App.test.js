import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

configure({ adapter: new Adapter() });

it('Simple test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('React App!')).toEqual(true);
});
