import React from 'react';
import {shallow} from 'enzyme';
import CheckboxList from './index';

describe('CheckboxList container', () => {
  const props = {
    headline: 'headline',
    classNameFilter: 'className',
    filters: [213, 123, 21, 3],
    handlesSwitchFilter: [],
    isChecked: []
  };

  describe('CheckboxList init', () => {
    const component = shallow(<CheckboxList {...props} />);

    test('checkbox render', () => {
      expect(component.find('input')).toHaveLength(props.filters.length);
    });

    test('label render', () => {
      expect(component.find('label')).toHaveLength(props.filters.length);
    });

    test('headline render', () => { // TODO:
      expect(component.find('.label-input')).toHaveLength(1);
    });

    test('paragraph render', () => {
      expect(component.find('label p')).toHaveLength(props.filters.length);
    });
  });


  describe('render text in field', () => {
    const component = shallow(<CheckboxList {...props} />);

    test('render text in headline', () => {
      expect(component.find('.label-input').text()).toEqual(props.headline);
    });
  });
});
