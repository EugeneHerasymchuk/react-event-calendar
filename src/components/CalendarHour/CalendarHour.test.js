import React from 'react';
import CalendarHour from './CalendarHour';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CalendarHour', () => {
  it('should render the hour', () => {
    const hour = 9;
    const wrapper = shallow(<CalendarHour hour={hour} />);

    expect(wrapper.text()).toEqual(`${hour}:00 - ${hour + 1}:00`);
  });

  it('should render X if the day is Off', () => {
    const dayOff = true;
    const wrapper = shallow(<CalendarHour hour={9} dayOff={dayOff} />);

    expect(wrapper.text()).toEqual('x');
  });
});
