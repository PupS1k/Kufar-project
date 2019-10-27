import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../IconButton';
import close from '../../images/plusReset.png';
import './style.css';
import ContextProvider from '../Context';

const ModalWindow = props => (
  <div>
    {ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__items">
          <div className="modal__close">
            <IconButton
              className="modal__close-button"
              onClick={props.toggleIsOpenModal}
              image={{
                alt: 'Close',
                icon: close,
                iconSize: 'medium'
              }}
            />
          </div>
          <ContextProvider value={props.toggleIsOpenModal}>
            {props.children}
          </ContextProvider>
        </div>
      </div>,
      document.getElementById('portal')
    )}
  </div>
);

export default ModalWindow;
