import React from 'react';
import {shallow, mount} from 'enzyme';
import InputField from './index';

describe('InputField container', () => {
  const props = {
    name: 'name',
    value: 'value',
    fieldError: 'error',
    type: 'text',
    handleInput: () => {},
    placeholder: 'placeholder'
  };

  describe('InputField init', () => {
    const component = shallow(<InputField {...props} />);

    test('render input', () => {
      expect(component.find('input')).toHaveLength(1)
    });

    test('render span', () => {
      expect(component.find('span')).toHaveLength(1)
    });
  });

  describe('render text in field', () => {
    const component = shallow(<InputField {...props} />);

    test('render text in span', () => {
      expect(component.find('span').text()).toEqual(props.fieldError)
    });
  });

  describe('variables is not undefined', () => {
    const component = mount(<InputField {...props} />);

    test('type is not undefined', () => {
      expect(component.prop('type')).toEqual(props.type)
    });

    test('handleInput is not undefined', () => {
      expect(component.prop('handleInput')).toEqual(props.handleInput)
    });

    test('placeholder is not undefined', () => {
      expect(component.prop('placeholder')).toEqual(props.placeholder)
    });
  })

});
