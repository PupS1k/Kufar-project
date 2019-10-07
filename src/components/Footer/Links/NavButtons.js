import React from 'react';
import guid from '../../../utils';
import Button from '../../Button';

const NavButtons = ({labels}) => (
  <div className="list-additional-links">
    {labels.map(label => (
      <Button
        key={guid()}
        className="additional-link"
        mode="default"
        labelSize="medium"
        label={label.text}
        image={labels.image}
      />
    ))}
  </div>
);

export default NavButtons;
