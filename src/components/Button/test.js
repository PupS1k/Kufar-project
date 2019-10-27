import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from './index';


describe('Button container', () => {
  const props = {
    label: 'label',
    mode: 'mode',
    labelSize: 'labelSize',
    type: 'button',
    className: '',
    bold: false,
    disabled: false,
    onClick: jest.fn(),
    image: null
  };

  describe('Button initial', () => {
    const image = {
      iconSize: 'size',
      icon: 'icon',
      alt: 'alt'
    };
    const component = shallow(<Button {...props} image={image} />);

    test('render button', () => {
      expect(component.find('button')).toHaveLength(1);
    });

    test('render text in button', () => {
      expect(component.find('p')).toHaveLength(1);
    });

    test('render image in button', () => {
      expect(component.find('img')).toHaveLength(1);
    });
  });

  describe('render button', () => {
    const newProps = {
      ...props,
      label: 'text'
    };

    const component = shallow(<Button {...newProps} />);

    test('render text in button', () => {
      expect(component.find('p').text()).toEqual(newProps.label);
    });
  });

  describe('require variable', () => {
    const component = mount(<Button {...props} />);
    test('label is not undefined', () => {
      expect(component.props().label).not.toBeUndefined();
    });

    test('labelSize is not undefined', () => {
      expect(component.props().labelSize).not.toBeUndefined();
    });

    test('mode is not undefined', () => {
      expect(component.props().mode).not.toBeUndefined();
    });
  });

  describe('when clicking the button', () => {
    const component = shallow(<Button {...props} />);

    component.find('button').simulate('click');

    test('click the button', () => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
