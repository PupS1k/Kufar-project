import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../IconButton';
import Authorization from '../Authorization';
import close from '../../images/plusReset.png';
import './style.css';

const ModalWindow = props => (
  <div>
    {ReactDOM.createPortal(
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
      </div>,
      document.getElementById('portal')
    )}
  </div>
);

export default ModalWindow;
