import React from 'react';
import IconButton from './IconButton';
import close from '../images/plusReset.png';
import Authorization from './Authorization';


const ModelWindow = props => (
  <div className="modal">
    <div className="modal__items">
      <div className="modal__close">
        <IconButton
          className="modal__close-button"
          onClick={props.toggleIsOpenModel}
          image={{
            alt: 'Close',
            icon: close,
            iconSize: 'medium'
          }}
        />
      </div>
      <Authorization />
    </div>
  </div>
);

export default ModelWindow;
