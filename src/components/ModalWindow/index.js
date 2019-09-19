import React from 'react';
import IconButton from '../Button/IconButton';
import Authorization from '../Authorization';
import close from '../../images/plusReset.png';
import './style.css';

const ModalWindow = props => (
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

export default ModalWindow;
