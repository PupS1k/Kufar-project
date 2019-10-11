import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';


describe('News container', () => {
  const props = {
    label: '',
    mode: '',
    labelSize: '',
    type: 'button',
    className: '',
    bold: false,
    disabled: false,
    onClick: () => {},
    image: null
  };

  const component = shallow(<Button {...props}/>);


  test('no render Button', () => {
    expect(component.find(Button)).toHaveLength(0)
  });
});
